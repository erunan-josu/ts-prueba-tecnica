import styled from '@emotion/styled'
import Paragraph from './ui/Paragraph'

const Footer = () => {
  return (
    <StyledFooter>
      <Paragraph text={'Made by Josu 😁'} />
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled('footer')({
  gridArea: 'ft',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '10vh',
  width: '100%',
  color: '#f5f5f5',
  background: '#555',
  marginTop: '2rem',
})
