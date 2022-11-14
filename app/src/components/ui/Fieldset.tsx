import styled from '@emotion/styled'
import Paragraph from './Paragraph'

interface Props {
  legend: string | undefined
  manufacturer: string | undefined
  description: string | undefined
  color: string | undefined
  processor: string | undefined
  price: number | undefined
}

const Fieldset = ({
  legend,
  manufacturer,
  description,
  processor,
  color,
  price,
}: Props) => {
  return (
    <StyledFieldset>
      <legend>{legend}</legend>
      <Paragraph text={manufacturer} />
      <Paragraph text={processor} />
      <Paragraph text={description} />
      <Paragraph text={`Color: ${color}`} />
      <Paragraph text={`Price: ${price}€`} />
    </StyledFieldset>
  )
}

export default Fieldset

const StyledFieldset = styled('fieldset')({
  width: '50%',
  marginBottom: '2rem',
  legend: {
    padding: '0rem 0.5rem',
  },
  p: {
    marginBottom: '1rem',
  },
})
