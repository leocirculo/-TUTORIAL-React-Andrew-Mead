import React from 'react';

interface State {
  text: string;
}

interface Props {
  onSubmit?: (text: string) => void;
}

export default class AddTodo extends React.Component<Props, State> {
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
    const { onSubmit } = this.props;
    if (onSubmit) {
      if (this.state.text) {
        onSubmit(this.state.text);
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
