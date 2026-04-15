import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Modal from 'react-modal';
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const el = document.getElementById('root')!
Modal.setAppElement(el);

createRoot(el).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
)
