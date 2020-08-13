import React from 'react';
import styled from 'styled-components'
import LineIcon from 'react-lineicons';
import style from 'styled-theming'

function TodoItem({ todo, completeTodo, removeTodo}) {
  function handleCompleteClick() {
    completeTodo(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <Styles>
      <div className="wrapper">
        <p 
        style={{textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#99CC99' : ''}}
        >
        {todo.task}
        </p>
        <div className="buttons">
          <button 
            className="btn btn__complete" 
            onClick={handleCompleteClick}
            style={{color: todo.completed ? '#99CC99' : ''}}
          >
            <LineIcon name="checkmark-circle" />
          </button>
          <button className="btn btn__delete"  onClick={handleRemoveClick}>
            <LineIcon name="trash" />
          </button>
        </div>
      </div>
    </Styles>
  )
}

export default TodoItem;

// Styles

const background = style('mode', {
  light: '#ffffff',
  dark:  '#233541',
})

const text = style('mode', {
  light:  '#233541',
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


const border = style('mode', {
  light: '#eee',
  dark:  'rgba(85,255,253, 0.3)',
})

const Styles = styled.div`

.wrapper {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  background: ${background};
  border-bottom: 0.1rem solid ${border};
}
  
p {
  font-size: 1.6rem;
  outline: none;
  color: ${text};
}

.buttons {
  display: flex;
  align-items: center;
}

.btn {
  margin: 0 0.5rem;
  outline: none;
  font-size: 1.6rem;
  border-radius: 10rem;
  border: 0.1rem solid ${background};
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all .3s ease;
  width: 4rem;
  height: 4rem;
  background: ${background};
  color: ${text};
  box-shadow:  0.7rem 0.7rem 2rem ${shadowTop}, 
             -0.7rem -0.7rem 2rem ${shadowBottom};

  &__complete:hover {
    color: #99CC99;
  }

  &__delete:hover {
    color: #ff7f7f;
  }
}

@media screen and (max-width: 800px) {
  .btn {
    padding: 1rem;
  }
}
`