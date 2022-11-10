import './App.css'
import { NavLink } from 'react-router-dom'
import MainLayout from './components/ui/layout/MainLayout'

const App = () => {
  return (
    <MainLayout>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
    </MainLayout>
  )
}

export default App
