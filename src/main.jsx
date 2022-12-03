import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  // <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </BrowserRouter>
  </React.StrictMode>
  // </QueryClientProvider>
)
