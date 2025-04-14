import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SwiftCare from './SwiftCare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SwiftCare />
  </StrictMode>,
)
