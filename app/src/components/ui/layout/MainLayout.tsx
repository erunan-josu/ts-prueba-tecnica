import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return <StyledMainLayout>{children}</StyledMainLayout>
}

export default MainLayout

const StyledMainLayout = styled('div')({
  height: '100vh',
})
