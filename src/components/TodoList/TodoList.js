import React, {useState, useEffect} from 'react';
import TodoItem from '../TodoItem/TodoItem'
import AddTodo from '../AddTodo/AddTodo'

export const TodoList  = () => {
  const initialTodos = [
    { id: '1', task: 'Go to the supermarket', completed: false },
    { id: '2', task: 'Call Alice', completed: false },
    { id: '3', task: 'Ask Alice to call Bob', completed: false },
    { id: '4', task: 'Do the dishes', completed: false },
    { id: '5', task: 'React Interview Task', completed: true },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const LOCAL_STORAGE_KEY = "react-todolist"

  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storeTodos) {
      setTodos(storeTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function completeTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    )
  }

  function removeTodo(id) {
    // Keep the todo if the id is not the one chosen, else remove todo
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return(
    <div>
      <AddTodo addTodo={addTodo}></AddTodo>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
        ))}
    </div>
  )
}

export default TodoList;