import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href="www.youtube.com" target='_blank'>Go to Youtube</a>
)

const reactElement = React.createElement(
  'a',
  {href:'www.youtube.com', target: '_blank'},
  'Go to Youtube hehe'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
