class Greeter extends React.Component{
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    e.preventDefault();
    const nameRef = this.refs.name;
    this.setState({
      name: nameRef.value || this.state.name,
    });
    nameRef.value = '';
  };

  render() {
    const name = this.state.name;
    const message = this.props.message;
    return (
      <div>
        <h1>Hello { name }</h1>
        <p>{ message }</p>

        <form onSubmit={ this.onButtonClick }>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  };
};
Greeter.defaultProps = {
  name: 'React',
  message: 'This is from a component',
};

ReactDOM.render(
  <Greeter name="Leo" message="Prop Message" />,
  document.getElementById('app')
);