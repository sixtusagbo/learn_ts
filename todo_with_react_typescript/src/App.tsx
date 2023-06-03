import React, { useState } from 'react';

import CreateTodo from './components/CreateTodo';
import TodoLists from './components/TodoList';
import { Todo } from './models/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodoCreate = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random.toString(), text }]);
  };

  return (
    <div className="App">
      <CreateTodo onCreate={handleTodoCreate} />
      <TodoLists items={todos} />
    </div>
  );
};

export default App;
