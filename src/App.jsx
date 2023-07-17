
import './App.css'
import Home from './pages/Home/Home'
import {Header} from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <div className='p-3 bg-body-tertiary'>
        <Home/>
      </div>
    </>
    
      
  )
}

export default App
