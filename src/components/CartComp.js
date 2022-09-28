import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { pupularProducts } from '../data'
import { mobile } from '../responsive'
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`

const CartComp = (props) => {
  const { product } = props
  const imgobj = pupularProducts.find((item) => item.id === Number(product.id))
  const title = imgobj.title
  const price = imgobj.price
  const imgadr = imgobj.img
  const [plusAmount, setPlusAmount] = useState(product.qty)

  return (
    <>
      <Info>
        <Product>
          <ProductDetail>
            <Image src={imgadr} />
            <Details>
              <ProductName>
                <b>Product:</b> {title}
              </ProductName>
            </Details>
          </ProductDetail>
          <PriceDetail>
            <ProductAmountContainer>
              <ProductAmount>{plusAmount}</ProductAmount>
            </ProductAmountContainer>
            <ProductPrice>$ {price * plusAmount}</ProductPrice>
          </PriceDetail>
        </Product>
      </Info>
    </>
  )
}

export default CartComp
