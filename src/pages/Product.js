import styled from 'styled-components'
import Announcments from '../components/Announcments'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { mobile } from '../responsive'
import { pupularProducts } from '../data'
import { useSearchParams, Link } from 'react-router-dom'
import { useState } from 'react'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ height: '40vh' })}
`
const Title = styled.h1`
  font-weight: 200;
`
const Desc = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`
const Product = (props) => {
  const {onAdd} = props

  const [searchParams, setSearchParams] = useSearchParams()
  const [amount, setAmount] = useState(1)
  const imgid = searchParams.get('id')
  const imgobj = pupularProducts.find((item) => item.id === Number(imgid))
  const title = imgobj.title
  const price = imgobj.price
  const imgadr = imgobj.img

  function decrease() {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  return (
    <Container>
      <Announcments />
      <Wrapper>
        <ImgContainer>
          <Image src={imgadr}></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            modi eos cumque ea, mollitia consectetur quo maiores neque alias
            molestias eum quis earum vel iste laudantium perferendis voluptate
            architecto corrupti?
          </Desc>
          <Price>$ {amount === 0 ? price : price * amount}</Price>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon
                onClick={() => decrease()}
                style={{ cursor: 'pointer' }}
              />
              <Amount>{amount}</Amount>
              <AddIcon
                onClick={() => setAmount(amount + 1)}
                style={{ cursor: 'pointer' }}
              />
            </AmountContainer>
            <Link to={`../../cart?id=${imgid}&amount=${amount}`}>
              <Button onClick={() => onAdd(imgid, amount)}>ADD TO CART</Button>
            </Link>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Product
