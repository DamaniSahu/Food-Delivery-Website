import { ToastContainer } from 'react-toastify'
import './App.css'
import Home from './Pages/Home'

function App() {
  return (
    <div className='text-red-500'>
      <Home/>
      <ToastContainer />
    </div>
  )
}

export default App
