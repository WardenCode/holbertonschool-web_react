import './App.css'
import holbertonLogo from './assets/holberton_logo.jpg'
import { getFooterCopy, getFullYear } from './utils'

function App() {
  return (
    <>
      <div className="App-header" data-testid="header">
        <figure>
          <img src={holbertonLogo} alt="Holberton Logo" />
        </figure>
        <h1>School dashboard</h1>
      </div>

      <div className="App-body" data-testid="body">
        <p>Login to access the full dashboard</p>

        <form>
          <label htmlFor="email">Email: </label>
          <input id="email" name="email" type="text" />

          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" />

          <button>OK</button>
        </form>
      </div>

      <div className="App-footer" data-testid="foter">
        <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
      </div>
    </>
  )
}

export default App
