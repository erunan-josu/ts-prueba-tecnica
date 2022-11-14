import styled from '@emotion/styled'
import Title from './Title'
import Image from './Image'

interface Props {
  img: string
  text: string
}

const Hero = ({ img, text }: Props) => {
  return (
    <StyledHero>
      <Image img={img} />
      <Title text={text} />
    </StyledHero>
  )
}

export default Hero
const StyledHero = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  img {
    min-width: 300px;
    max-width: 800px;
    width: 50%;
    height: 100%;
  }
  h1 {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 728px) {
    justify-content: center;
    img {
      height: 70%;
    }
  }
`
