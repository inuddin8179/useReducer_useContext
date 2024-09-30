import React, { useState } from 'react';
import { useTodo } from './TodoProvider';

function  Additem() {
  const { dispatch } = useTodo();
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch({ 
        type: 'ADD_TODO', 
        payload: { id: Date.now(), text } 
      });
      setText('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};
export default Additem