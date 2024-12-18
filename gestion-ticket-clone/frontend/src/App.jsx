import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
  return (
    <main>
      <Router>
        <div className="flex-1 overflow-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <AppRoutes />
          </Suspense>
        </div>
      </Router>
      <Toaster />
    </main>
  )
}

export default App
