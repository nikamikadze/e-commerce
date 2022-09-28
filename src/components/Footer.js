import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone'
import RoomIcon from '@mui/icons-material/Room'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#eee' })}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <img
            style={{ width: '60px' }}
            src='http://static1.squarespace.com/static/5efe5fe7bf12417568c17d3e/t/5fe95cccc6dabf26faf38511/1609129168836/NM_Monogram-BlackBorder-Small.png?format=1500w'
            alt='logo'
          />
        </Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem
          aspernatur ab, reprehenderit, suscipit similique, ipsa quisquam
          officiis esse officia molestias. Aut consectetur magni rem modi ab
          pariatur eum cum.
        </Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <a
              style={{ textDecoration: 'none', color: 'inherit' }}
              href='https://www.facebook.com/nikausha.mikadze/'
            >
              <FacebookIcon />
            </a>
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <a
              style={{ textDecoration: 'none', color: 'inherit' }}
              href='https://www.instagram.com/mikadze_nika/'
            >
              <InstagramIcon />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: '10px' }} /> Rustavi, Merab Kostavas
          999
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: '10px' }} /> 555 555 555
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: '10px' }} /> nika@mika
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}

export default Footer
