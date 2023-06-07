import holberton_logo from './assets/holberton_logo.jpg'
import './App.css'

function App() {
  return (
    <>
      <div className="App-header">
        <figure>
          <img src={holberton_logo} alt="Holberton Logo" />
        </figure>
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </>
  )
}

export default App
