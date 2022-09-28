import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcments'
import CartComp from '../components/CartComp'
import Footer from '../components/Footer'
import { pupularProducts } from '../data'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin: 35px 0 0 10px;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`
const NoItem = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Text = styled.h1`
  text-align: center;
  font-size: 5rem;
  color: gray;
`
const Items = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    flex: 3;
  }
`
const Scrollable = styled.div`
  width: 100%;
  height: 60vh;
  overflow: auto;
  ${mobile({ height: '50vh' })}
`

const Cart = (props) => {
  var items = props.cartItems
  var totalPrice = props.totalPrice
  console.log(totalPrice)
  //checks url id and amount
  const [searchParams, setSearchParams] = useSearchParams()
  const itemid = searchParams.get('id')
  const amount = searchParams.get('amount')
  if (itemid) {
    const imgobj = pupularProducts.find((item) => item.id === Number(itemid))
    var price = imgobj.price
  }

  return (
    <Container>
      <Announcement />
      <Wrapper>
        <Title>CART</Title>
        <Top>
          <Link to={'../productlist'}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          {items.length !== 0 && (
            <Items>
              <Scrollable>
                {items.map((item) => (
                  <CartComp product={item} key={item.id} />
                ))}
              </Scrollable>
            </Items>
          )}

          {items.length === 0 && (
            <NoItem>
              <Text>There's No Item</Text>
            </NoItem>
          )}

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
