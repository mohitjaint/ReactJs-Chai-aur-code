import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createElement } from 'react'

function MyApp (){
  return(
  <div>
    <h1>This is a custom app</h1>
    <p>Idk what to write here</p>
  </div>
  )
}

const customElement01 = (
  <div>
    <h1>This is a custom element</h1>
    <p>Idk what to write here</p>
  </div>
)

const customElement02 = createElement(
  'a',
  {
    href : "https://google.com",
    target : "_blank"
  },
  'Click me to visit google'
) 

createRoot(document.getElementById('root')).render(

    customElement02

)
