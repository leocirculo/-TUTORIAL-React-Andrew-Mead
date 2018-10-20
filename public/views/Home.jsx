import React from 'react';
import OpenWeatherMap from 'OpenWeatherMap';
import './../styles/home.css';
import Form from './../components/Form';
import FormMsg from './../components/FormMsg';
import Layout from './../components/Layout';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }

    this.handleSearch = this.handleSearch.bind(this);
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
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { isLoading, temp, location } = this.state;

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
          <h1>Get Weather</h1>
          <Form onSearch={this.handleSearch} />
          { renderMessage() }
        </Layout>
      </div>
    );
  };
};

export default Main;