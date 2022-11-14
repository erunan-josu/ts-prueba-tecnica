import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { client } from '../api/api'
import { initPhones } from '../reducers/phones'
import Card from '../components/ui/Card'
import Hero from '../components/ui/Hero'
import heroImg from '../../public/images/phones.jpg'
import Footer from '../components/Footer'

type State = {
  phones: Phone[]
}

const Home = () => {
  const dispatch = useDispatch()
  const phones = useSelector((state: State) => state.phones)

  useEffect(() => {
    client.get('phones').then((res) => {
      dispatch(initPhones(res.data.phones))
    })
  }, [])

  console.log(phones)
  return (
    <StyledHome>
      <Hero img={heroImg} text={'Discover our Phones'} />
      <PhoneList>
        {phones.map((phone) => (
          <Card
            key={phone.id}
            img={`../../public/images/${phone.imageFileName}`}
            name={phone.name}
          />
        ))}
      </PhoneList>
    </StyledHome>
  )
}
export default Home

const StyledHome = styled('section')({
  height: '100%',
  width: '100%',
  padding: '2rem 4rem',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
})

const PhoneList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 460px) {
    justify-content: center;
  }
`
