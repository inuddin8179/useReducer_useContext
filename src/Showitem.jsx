import React from 'react';
import { useTodo } from './TodoProvider';
function  Showitem () {
    const { state, dispatch } = useTodo();
  
    return (
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  };
  export default Showitem