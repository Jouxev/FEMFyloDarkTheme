import styled from "styled-components";
import { ReactComponent as Logo } from "../Assets/Images/logo.svg";
import { mobile } from "../responsive";

const Container = styled.nav`
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "0",
  })}
`;

const Right = styled.div`
  flex: 1;
`;
const Left = styled.div`
  flex: 1;
  justify-content: center;
`;
const Links = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--Cyan);
  ${mobile({
    justifyContent: "center",
    width: "100%",
    fontSize: "12px",
  })}
`;
const Link = styled.li`
  list-style: none;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: var(--White);
  }
  ${mobile({
    marginRight: "10px",
  })}
`;

export const NavBar = () => {
  return (
    <Container>
      <Right>
        <Logo className="Logo" />
      </Right>
      <Left>
        <Links>
          <Link>Features </Link>
          <Link>Team </Link>
          <Link>Sign In</Link>
        </Links>
      </Left>
    </Container>
  );
};
