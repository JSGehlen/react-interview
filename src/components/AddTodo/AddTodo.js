import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import ToggleMode from '../ToggleMode/toggleMode'
import styled from 'styled-components'
import LineIcon from 'react-lineicons';
import style from 'styled-theming'

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  })

  function handleTaskInputChange(e) {
    setTodo({...todo, task: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Trim is used for if todo task not empty by removing whitespace
    if(todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4()});
      // reset task
      setTodo({...todo, task: ""});
    }
    console.log(todo.id)
  }

  return (
    <Styles>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <input
              data-testid="todoInput"
              placeholder="Add todo"
              name="task"
              type="text"
              value={todo.task}
              onChange={handleTaskInputChange}
              />
          <button 
            className="btn btn__plus"
            data-testid="addTodo"
            >
            <LineIcon name="plus" />
          </button>
        </form>
        <ToggleMode />
      </div>
    </Styles>
  )
}

export default AddTodo;

// Styles

const background = style('mode', {
  light: '#ffffff',
  dark:  '#243441',
})

const text = style('mode', {
  light:  '#243441',
  dark: '#ffffff',
})

const shadowTop = style('mode', {
  light: '#ededed',
  dark:  '#1c2a34',
})

const shadowBottom = style('mode', {
  light: '#ffffff',
  dark:  '#2a404e',
})

const plus = style('mode', {
  light: '',
  dark: '#55FFEF'
})

const border = style('mode', {
  light: '#eee',
  dark:  'rgba(85,255,253, 0.3)',
})

const Styles = styled.div`
  .wrapper {
    padding: 2rem 0;
    background: ${background};
    width: 100%;
    display: flex;
  }

  form {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;

    &:nth-child(1) {
      flex: 1 1 auto;
    }
  }

.btn {
  border-radius: 1.8rem;
  background: ${background};
  box-shadow:  0.7rem 0.7rem 2rem ${shadowTop}, 
  -0.7rem -0.7rem 2rem ${shadowBottom};
  border: none;
  margin-left: 2rem;
  padding: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all .3s ease;
  border: 0.1rem solid ${background};

  &__plus {
    color: ${plus};

    &:hover {
      color: #99CC99;
    }
  }

  &:hover, :focus {
  border: 0.1rem solid ${border};
  }
}


input {
  flex: 3;
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 1rem;
  border: 0.1rem solid transparent;
  padding: 1.5rem 1rem;
  color: ${text};
  background: ${background};
  outline: none;
  transition: all .3s ease;
  border: 0.1rem solid ${border};

  &::placeholder {
    color: ${text};
    font-family: 'Livvic', sans-serif;
  }

  &:hover, :focus {
    border: 0.1rem solid ${border};
  }
}
`