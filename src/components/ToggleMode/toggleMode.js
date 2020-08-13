import React from 'react'
import styled, {ThemeConsumer} from 'styled-components'
import LineIcon from 'react-lineicons';
import style from 'styled-theming'

export default function ToggleMode() {
  return (
    <Styles>
      <ThemeConsumer>
        {theme => (
          <button
              onClick={e =>
                theme.setTheme(
                  theme.mode === 'dark'
                  ? {...theme, mode: 'light'}
                  : {...theme, mode: 'dark'}
                  )
                }
                > 
            <LineIcon name="invention" />
          </button>
        )}
      </ThemeConsumer>
    </Styles>
  );
}

const background = style('mode', {
  light: '#ffffff',
  dark:  '#233541',
})

const light = style('mode', {
  light: 'initial',
  dark:  '#ffea00',
})

const lightOn = style('mode', {
  light: '#ffea00',
  dark:  'initial',
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
  light: 'transparent',
  dark: 'rgba(85,255,253, 0.2)'
})

const Styles = styled.div`
button {
    border-radius: 1.8rem;
    background: ${background};
    box-shadow:  0.7rem 0.7rem 2rem ${shadowTop},
    -0.7rem -0.7rem 2rem ${shadowBottom};
    border: 0.1rem solid ${background};
    margin-left: 1rem;
    padding: 1rem;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all .3s ease;
    outline: none;
    color: ${light};
  
    &:hover, :active {
      color: ${lightOn};
      border: 0.1rem solid ${border}
    }
  }
`