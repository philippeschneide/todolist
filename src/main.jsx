
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Server Sider
//can add metadata here for SEO.
//Header Component can be used to add metadata dynamically.
//Footer Component can be used to add footer content dynamically.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
