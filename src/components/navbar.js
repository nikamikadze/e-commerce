import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useSetSearch } from '../pages/SearchContext'

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  height: 60px;
  ${mobile({ height: '50px' })}
  z-index: 5;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '0px' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.img`
  width: 50px;
  ${mobile({ width: '50px' })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`
const Navbar = () => {
  const setSearch = useSetSearch()
  const [searchBar, setSearchBar] = React.useState(false)
  const location = useLocation()
  useEffect(() => {
    if (window.location.pathname === '/productlist') {
      setSearchBar(true)
    } else {
      setSearchBar(false)
    }
  }, [location])
  return (
    <Container>
      <Wrapper>
        <Left>
          {searchBar && (
            <SearchContainer>
              <Input placeholder='Search' onChange={setSearch} />
              <Search style={{ color: 'gray', fontSize: 16 }} />
            </SearchContainer>
          )}
        </Left>
        <Center>
          <Link to='/'>
            <Logo src='http://static1.squarespace.com/static/5efe5fe7bf12417568c17d3e/t/5fe95cccc6dabf26faf38511/1609129168836/NM_Monogram-BlackBorder-Small.png?format=1500w' />
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to='cart'>
              <Badge color='primary'>
                <ShoppingCartOutlinedIcon style={{ marginRight: '20px' }} />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
