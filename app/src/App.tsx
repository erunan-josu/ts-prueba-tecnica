import { Outlet } from 'react-router-dom'
import MainLayout from './components/ui/layout/MainLayout'
import Navbar from './components/ui/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <MainLayout>
      <Navbar />
      <Outlet />
      <Footer />
    </MainLayout>
  )
}

export default App
