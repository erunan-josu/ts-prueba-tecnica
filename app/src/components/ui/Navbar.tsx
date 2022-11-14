import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <StyledNav>
      <NavLink to="/">GuideSmiths</NavLink>
    </StyledNav>
  )
}

export default Navbar

const StyledNav = styled.nav({
  gridArea: 'hd',
  display: 'flex',
  alignItems: 'center',
  padding: '0 4rem',
  borderBottom: '1px solid #333',
})
