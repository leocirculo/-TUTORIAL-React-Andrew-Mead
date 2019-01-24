import React from 'react';

interface Props {
  onSearch?: (text: string, showCompleted: boolean) => void;
  query: string;
  showCompleted: boolean;
}

export default class TodoSearch extends React.Component<Props> {
  public render() {
    const { query, showCompleted } = this.props;
    return (
      <header className="container__header todo-search">
        <div className="todo-search__search-bar">
          <input
            className="search-bar__input"
            type="text"
            placeholder="Search todos"
            value={query}
            onChange={event => {
              this.handleOnChange(event.target.value, undefined);
            }}
          />
        </div>
        <div className="todo-search__show-completed">
          <label htmlFor="show-completed">
            <input
              className="show-completed__checkbox"
              type="checkbox"
              id="show-completed"
              checked={showCompleted}
              onChange={() => {
                this.handleOnChange(undefined, !showCompleted);
              }}
            />
            Show completed Todos
          </label>
        </div>
      </header>
    );
  }

  private handleOnChange = (query?: string, showCompleted?: boolean) => {
    if (this.props.onSearch) {
      const returnQuery = query !== undefined ? query : this.props.query;
      const returnShowCompleted =
        showCompleted !== undefined ? showCompleted : this.props.showCompleted;
      this.props.onSearch(returnQuery, returnShowCompleted);
    }
  };
}
