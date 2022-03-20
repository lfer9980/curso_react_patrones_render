import React from 'react';
import './TodoList.css'

function TodoList(props) {

  console.log(props.searchedTodos)
  return (
    <section className="todoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}

      <ul>
        {props.searchedTodos.map(props.render)}
      </ul>
    </section>
  );
}

export { TodoList };
