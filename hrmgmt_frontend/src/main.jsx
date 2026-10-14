import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';       //importing BrowserRouter from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';  //importing bootstrap css
import 'bootstrap/dist/js/bootstrap.bundle.js';  //importing bootstrap js

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>       
    <App />
    </BrowserRouter>
  </StrictMode>,
)
