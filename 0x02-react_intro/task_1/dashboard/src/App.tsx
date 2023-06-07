import holberton_logo from './assets/holberton_logo.jpg'
import './App.css'
import { getFooterCopy, getFullYear } from './utils'

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
        <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
      </div>
    </>
  )
}

export default App
