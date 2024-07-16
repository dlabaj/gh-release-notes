import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Generate release notes</h1>
    <form id="form" className="card form">
      <label className="form__label">Name: <input type="text" id="name" name="name" value="patternfly"/></label>
      <label className="form__label">Repo: <input type="text" id="repo" name="repo" value="patternfly"/></label>
      <label className="form__label">Base branch: <input type="text" id="base" name="base" value="main"/></label>
      <label className="form__label">Start date: <input type="text" id="startDate" name="startDate"/></label>
      <label className="form__label">End date: <input type="text" id="endDate" name="endDate"/></label>
      <input type="submit"/>
    </form>

    <div id="output" className="card">
      <h2>Source</h2>
      <div id="source" className="card__source"></div>
      <h2>Preview</h2>
      <div id="preview" className="card__preview"></div>
    </div>
    </>
  )
}

export default App
