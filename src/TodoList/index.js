import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunction = props.children || props.render

  return (
    <section className="todoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      <ul>
        {(!props.loading && !props.error) && props.searchedTodos.map(renderFunction)}
      </ul>
    </section>
  );
}

export { TodoList };
