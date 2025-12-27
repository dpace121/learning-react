import React from 'react'
import Card from './components/Card'

const App = () => {

  return (
    <div className="parent">
    <Card user="Dipesh" age={18} img='https://images.unsplash.com/photo-1761538087574-41254b89f252?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    <Card user="Ram" age={25} img='https://images.unsplash.com/photo-1761438180295-9ea187978263?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
   
  </div>
  )
}

export default App
