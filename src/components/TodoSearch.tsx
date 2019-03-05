import React from 'react';
import { connect } from 'react-redux';

import { State as StoreState } from './../store/index';
import { setSearchText, toggleShowCompleted } from './../store/actions/actions';

interface Props {
  query: string;
  showCompleted: boolean;
  setSearchText?: (text: string) => void;
  toggleShowCompleted?: () => void;
}

export class TodoSearch extends React.Component<Props> {
  public render() {
    const { query, showCompleted, setSearchText, toggleShowCompleted } = this.props;
    return (
      <header className="container__header todo-search">
        <div className="todo-search__search-bar">
          <input
            className="search-bar__input"
            type="text"
            placeholder="Search todos"
            value={query}
            onChange={event => { setSearchText && setSearchText(event.target.value) }}
          />
        </div>
        <div className="todo-search__show-completed">
          <label htmlFor="show-completed">
            <input
              className="show-completed__checkbox"
              type="checkbox"
              id="show-completed"
              checked={showCompleted}
              onChange={() => { toggleShowCompleted && toggleShowCompleted() }}
            />
            Show completed Todos
          </label>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    showCompleted: state.showCompleted,
    query: state.search,
  }; 
}

const mapDispatchToProps = {
  setSearchText,
  toggleShowCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoSearch);