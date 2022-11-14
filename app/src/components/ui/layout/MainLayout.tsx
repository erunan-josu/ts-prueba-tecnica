import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return <StyledMainLayout>{children}</StyledMainLayout>
}

export default MainLayout

const StyledMainLayout = styled('div')({
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '10vh 1fr 10vh',
  gridTemplateAreas: `'hd' 'main' 'ft'`,
  background: '#f5efef',
})
