import styled from '@emotion/styled'
import Image from './Image'
import { useNavigate } from 'react-router-dom'

interface Props {
  img: string
  name: string
}

const Card = ({ img, name }: Props) => {
  const navigate = useNavigate()
  return (
    <StyledCard
      onClick={() => {
        navigate(`/${name}`)
      }}
    >
      <Image img={img} />
      <StyledName>{name}</StyledName>
    </StyledCard>
  )
}

export default Card

const StyledCard = styled('div')({
  cursor: 'pointer',
  width: '100px',
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '5px',
  borderEndEndRadius: '5px',
})

const StyledName = styled('p')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
