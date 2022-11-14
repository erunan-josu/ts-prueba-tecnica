import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Image from '../components/ui/Image'
import Fieldset from '../components/ui/Fieldset'

type State = {
  phones: Phone[]
}

const Details = () => {
  const phones = useSelector((state: State) => state.phones)
  const [phone, setPhone] = useState<Phone | undefined>()
  const { name } = useParams()

  useEffect(() => {
    setPhone(phones.find((item) => item.name === name))
  }, [phone])

  return (
    <StyledDetails>
      <Image img={`../../public/images/${phone?.imageFileName}`} />
      <Fieldset
        legend={phone?.name}
        manufacturer={phone?.manufacturer}
        processor={phone?.processor}
        description={phone?.description}
        color={phone?.color}
        price={phone?.price}
      />
    </StyledDetails>
  )
}

export default Details

const StyledDetails = styled.section`
  grid-area: main;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 4rem;
  img {
    height: 50%;
    min-width: 300px;
  }
  @media (max-width: 720px) {
    padding: 2rem;
    img {
      height: 50%;
      width: 70%;
    }
    fieldset {
      width: 70%;
    }
  }

  @media (max-width: 500px) {
    fieldset {
      width: 80%;
    }
  }
`
