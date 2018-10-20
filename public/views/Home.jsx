import React from 'react';
import queryString from 'query-string';
import OpenWeatherMap from './../api/openWeatherMap';
import Form from './../components/Form';
import FormMsg from './../components/FormMsg';
import Layout from './../components/Layout';
import ErrorModal from './../components/ErrorModal';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorMessage: null,
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const { location } = queryString.parse(this.props.location.search);
    location && this.handleSearch(location);
  }

  handleSearch(location) {
    this.setState({ isLoading: true });
    
    OpenWeatherMap.getTemp(location)
    .then((temp) => {
      this.setState({
          location,
          temp,
          isLoading: false,
        });
        window.history.pushState('string', '', `/?location=${location}`);
      })
      .catch((error) => {
        this.setState({ isLoading: false, errorMessage: error.message });
        window.history.pushState('string', '', `/?location=${location}`);
      });
  }

  render() {
    const { isLoading, temp, location, errorMessage } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <div style={{ padding: '2em', textAlign: 'center' }}><p>Loading...</p></div>
      } else if (temp && location) {
        return <FormMsg location={location} temp={temp} />
      }
    }

    return (
      <div className="page home">
        <Layout>
          <header className="padding-vertical-2 text-center">
            <h1>Get Weather</h1>
          </header>
          <Form onSearch={this.handleSearch} />
          { renderMessage() }
          { errorMessage && <ErrorModal message={errorMessage} />}
        </Layout>
      </div>
    );
  };
};