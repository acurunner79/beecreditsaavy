import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Hamburger from './Nav/Hamburger'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100vw;
    height: 100vh;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    background: rgb(0, 0, 0)
}

a{
    text-decoration: none;
}

li{
    text-decoration: none;
    list-style: none;
    font-weight: 500;
}

h1, h2, h3, h4, h5, h6, p{
    color: white;
}
`

const Layout = ({children}) => {
  return (
    <div>
      <GlobalStyle />
      <Hamburger />
      <section>{children}</section>
    </div>
  )
}

export default Layout
