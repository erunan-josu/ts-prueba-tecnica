import styled from '@emotion/styled'

interface Props {
  img: string
}

const Image = ({ img }: Props) => {
  return <StyledImage src={img} />
}

export default Image

const StyledImage = styled('img')({
  height: '100px',
  borderRadius: '5px',
})
