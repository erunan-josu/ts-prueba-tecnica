import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { client } from '../api/api'
import { initPhones } from '../reducers/phones'

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
  return <StyledHome></StyledHome>
}
export default Home

const StyledHome = styled('section')({
  height: '100%',
  width: '100vw',
  background: 'blue',
})
