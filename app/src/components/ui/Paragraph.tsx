interface Props {
  text: string | undefined
}

const Paragraph = ({ text }: Props) => {
  return <p>{text}</p>
}

export default Paragraph
