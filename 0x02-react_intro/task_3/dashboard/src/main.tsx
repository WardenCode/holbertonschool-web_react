import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Notifications from './Notifications';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='root-notifications'>
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
)
