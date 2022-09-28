import Products from '../components/Products'
import Footer from '../components/Footer'
import { pupularProducts } from '../data'
import { useSearch } from './SearchContext'

const ProductList = () => {
  const search = useSearch()
  //states
  const test = pupularProducts.filter((item) => {
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item
    }
  })

  return (
    <div style={{ marginTop: '3%' }}>
      <Products filtered={test} />
      {test.length == 0 && (
        <h1 style={{ textAlign: 'center', margin: '5%' }}>No Items Found</h1>
      )}
      <Footer />
    </div>
  )
}

export default ProductList
