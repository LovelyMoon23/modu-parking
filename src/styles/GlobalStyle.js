import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #333;
  }
  html, body{
    font-family: 'Noto Sans KR', sans-serif;
    height: 100%;
  }
	a{
    text-decoration: none;
    color: inherit;
  }
  input[type='text'] {
    width: 100%;
    padding: .5rem;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
`

//mixin 추가 할 예정

export default GlobalStyle
