import React from 'react';

import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  handleDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, handleDelete }) => {
  return (
    <ul>
      {items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleDelete(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
