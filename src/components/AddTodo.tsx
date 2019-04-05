import React from 'react';
import { connect } from 'react-redux';
import { startAddTodo } from './../store/actions/actions';

interface State {
  text: string;
}

interface Props {
  startAddTodo?: (text: string) => void;
}

export class AddTodo extends React.Component<Props, State> {
  public state = {
    text: '',
  };

  private inputRef = React.createRef<HTMLInputElement>();

  public render() {
    return (
      <footer className="container__footer">
        <form onSubmit={this.handleOnSubmit} className="add-todo">
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}
            ref={this.inputRef}
            placeholder="What do you need to do"
          />
          <button className="button" type="submit">
            Add Todo
          </button>
        </form>
      </footer>
    );
  }

  public handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { startAddTodo } = this.props;
    if (startAddTodo) {
      if (this.state.text) {
        startAddTodo(this.state.text);
        this.setState({ text: '' });
      } else if (this.inputRef.current) {
        this.inputRef.current.focus();
      }
    }
  };

  public handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ text: event.currentTarget.value });
  };
}

const mapDispatchToProps = {
  startAddTodo,
};

export default connect(null, mapDispatchToProps)(AddTodo);
