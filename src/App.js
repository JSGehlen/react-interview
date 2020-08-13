import React from 'react';
import useTheme from './components/UseTheme/useTheme'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import style from 'styled-theming'
import TodoList from './components/TodoList/TodoList'

function App() {
  const theme = useTheme()
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
            <div className="container">
              <div className="container__title">
                <h1>ToDoList</h1>
              </div>
              <div className="container__content">
                <TodoList />
              </div>
            </div>
        </ThemeProvider>
      </>
    );
}

export default App;

// Styles

const body = style('mode', {
  light: {
    color: '#121212',
    background: '#ffffff'
  },
  dark:  {
    color: '#fff',
    background: '#243441'
  }
})

const shadowTop = style('mode', {
  light: '#d9d9d9',
  dark:  '#1c2a34',
})

const shadowBottom = style('mode', {
  light: '#ffffff',
  dark:  '#2a404e',
})

const container = style('mode', {
  light: '#ffffff',
  dark:  '#233541',
})

const backgroundImage = style('mode', {
  light: 'https://images.unsplash.com/photo-1551524559-0fd32213ae44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
  dark: 'https://i.pinimg.com/originals/22/85/91/228591b4d875e7a847d6f45856cff4f9.jpg'
})

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${body};
  color: ${body};
}

.container {
  width: 50rem;
  position: absolute;
  margin-top: 4rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1.8rem;
  background: ${container};
  box-shadow:  7px 7px 20px  ${shadowTop}, 
              -7px -7px 20px  ${shadowBottom};

  &__title {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 3rem;
    height: 10rem;
    background: url(${backgroundImage});
    background-size: cover;
    border-top-left-radius: 1.8rem;
    border-top-right-radius: 1.8rem;
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
  }

  &__content {
    padding: 3rem;
  }
}

@media screen and (max-width: 800px) {
  .container {
    width: auto;
    margin-top: 0;
  }
}
`