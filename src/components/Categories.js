import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile, pc } from '../responsive'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  ${mobile({ display: 'none' })}
  ${pc({ display: 'none' })}
`

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </Container>
  )
}

export default Categories
