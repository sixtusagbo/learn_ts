import React, { useRef } from 'react';

interface CreateTodoProps {
  onCreate: (text: string) => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ onCreate }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    onCreate(enteredText);
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
