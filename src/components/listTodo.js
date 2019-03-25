import React from 'react';
import Aux from '../hoc/aux'
import Todo from './todo'

const ListTodo = (props) => {
  const listItem = props.list.map((list, id) =>
    <Todo content={list.content} done={list.done} id={id} updateStatus={(e) => props.updateStatus(e)}
      remove={(e) => props.remove(e)} />
  );

  return (
    <Aux>
      <h1>Todo List<span>Get things done, one item at a time.</span></h1>
      <ul>
        {listItem}
      </ul>
    </Aux>
  )
};

export default ListTodo;
