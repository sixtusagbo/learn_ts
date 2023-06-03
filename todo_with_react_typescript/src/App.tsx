import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import CreateTodo from './components/CreateTodo';
import TodoLists from './components/TodoList';
import { Todo } from './models/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodoCreate = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: uuid(), text }]);
  };

  const removeTodo = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <CreateTodo onCreate={handleTodoCreate} />
      <TodoLists items={todos} handleDelete={removeTodo} />
    </div>
  );
};

export default App;
