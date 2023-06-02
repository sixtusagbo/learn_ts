import React from 'react';

import CreateTodo from './components/CreateTodo';
import TodoLists from './components/TodoList';

const App: React.FC = () => {
  const todos = [
    { id: 't1', text: 'Finish Dart 3 codelab' },
    { id: 't2', text: 'Attend lectures today' },
    { id: 't3', text: 'Have breakfast before leaving!' },
  ];

  return (
    <div className="App">
      <CreateTodo />
      <TodoLists items={todos} />
    </div>
  );
};

export default App;
