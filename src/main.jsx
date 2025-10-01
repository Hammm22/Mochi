import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Info from './Components/mochiInfo.jsx'
import Sejarah from "./Components/sejarahMochi.jsx"
import Jenis from "./Components/jenisMochi.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Info />
    <Sejarah />
    <Jenis />
  </StrictMode>,
)
