import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = (props) => {
  return (
    <Container>
      {props.filtered.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products
