import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import MainLayout from './components/ui/layout/MainLayout'
import styled from '@emotion/styled'

const App = () => {
  return (
    <MainLayout>
      <Navbar>
        <NavLink to="/">Home</NavLink>
      </Navbar>
      <Outlet />
    </MainLayout>
  )
}

export default App

const Navbar = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 4rem',
})
