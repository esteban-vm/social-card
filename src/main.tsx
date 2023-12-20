import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from '@/Card'
import '@/styles.css'

const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Card />
  </StrictMode>
)
