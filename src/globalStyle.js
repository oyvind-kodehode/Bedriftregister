import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 

* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
}

StyledLi {
	border-bottom: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
}

Collapsible {
  width: 5rem;
  height: 2rem;
  border: 3px solid black;
}




`
