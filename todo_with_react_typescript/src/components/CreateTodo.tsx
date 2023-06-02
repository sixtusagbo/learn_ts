import React, { useRef } from 'react';

const CreateTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <div>
        <label htmlFor="todo_text">Todo Text: </label>
        <input type="text" id="todo_text" ref={textInputRef} required />
      </div>

      <button type="submit">CREATE TODO</button>
    </form>
  );
};

export default CreateTodo;
