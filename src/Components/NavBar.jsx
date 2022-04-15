import styled from 'styled-components'
import { ReactComponent as Logo } from '../Assets/Images/logo.svg'

const Container = styled.nav``

const Right = styled.div``
const Left = styled.div``
const Links = styled.ul``
const Link = styled.li``

export const NavBar = () => {
  return (
    <Container>
        <Right> 
            <Logo />
        </Right>
        <Left>
            <Links>
            <Link>Features </Link>
            <Link>Team </Link>
            <Link>Sign In </Link>
            </Links>
        </Left>

    </Container>
  )
}
