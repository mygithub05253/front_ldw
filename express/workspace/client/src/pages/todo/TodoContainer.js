import React, { useEffect, useState } from 'react';
import TodoInsert from './TodoInsert';
import Todo from './Todo';

const TodoContainer = () => {

  const [todos, setTodos] = useState([]);
  const [isTodoUpdate, setIsTodoUpdate] = useState(false);

  const getTodos = async () => {
    const response = await fetch("http://localhost:4000/todo");
    const datas = await response.json();
    setTodos(datas);
  }

  useEffect(() => {
    getTodos()
  }, [isTodoUpdate])

  console.log(todos)

  return (
    <div>
      <TodoInsert isTodoUpdate={isTodoUpdate} setIsTodoUpdate={setIsTodoUpdate} todos={todos} />
      <p className='SubTitle'>남은 할일: 🙂<span>{todos && todos.length}</span></p>
      <ul>
        { todos && todos.map((todo, i) => (
          <Todo key={i} todo={todo} isTodoUpdate={isTodoUpdate} setIsTodoUpdate={setIsTodoUpdate} />
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;