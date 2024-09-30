import React, { createContext, useReducer, useContext } from 'react';


const initialState = { todos: [] };


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
};


const TodoContext = createContext();


const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};


const useTodo = () => {
  return useContext(TodoContext); 
};

export { TodoProvider, useTodo };
