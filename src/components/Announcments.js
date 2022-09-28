import styled from 'styled-components'

const Container = styled.div`
  height: 40px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
`

const Anmouncments = () => {
  return <Container>Super Deal! Free Shiping On Orders Over $50</Container>
}

export default Anmouncments
