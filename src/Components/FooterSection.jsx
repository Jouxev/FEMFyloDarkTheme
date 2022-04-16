import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../Assets/Images/logo.svg";
import { ReactComponent as Location } from "../Assets/Images/icon-location.svg";
import { ReactComponent as Phone } from "../Assets/Images/icon-phone.svg";
import { ReactComponent as Email } from "../Assets/Images/icon-email.svg";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { mobile } from "../responsive";
const Container = styled.footer`
  height: 100%;
  width: 100%;
  background-color: var(--InputBg);
  position: relative;
  text-algin: center;
`;

const ColorDiv = styled.div`
  height: 120px;
  width: 100%;
`;
const EmailContainer = styled.div`
  background: var(--InputBg);
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  -webkit-box-shadow: 2px 5px 11px 5px rgba(11, 21, 35, 0.81);
  box-shadow: 2px 5px 11px 5px rgba(11, 21, 35, 0.81);
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  ${mobile({
    width: "80%",
  })}
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
`;
const Desc = styled.p`
  font-size: 12px;
  color: var(--Cyan);
  text-align: center;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: "column",
  })}
  ${mobile({
    alignItems: "flex-start",
  })}
`;
const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 3;
  ${mobile({
    flex: "auto",
    marginLeft: "20px",
    justifyContent: "center",
  })}
`;
const Span = styled.span`
  font-size: 8px;
  margin: 0px 20px;
  font-weight: 700;
  color: var(--Light);
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 80%;
  padding: 10px 20px;
  border-radius: 20px;
  ${mobile({
    width: "100%",
    margin: "10px 0px",
    padding: "10px 23px",
  })}
`;
const Button = styled.button`
  padding: 10px 50px;
  color: var(--White);
  font-size: 14px;
  background: linear-gradient(90deg, var(--Cyan) 30%, var(--Blue) 70%);
  border-radius: 20px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: var(--Cyan);
  }
  ${mobile({
    marginLeft: "20px",
  })}
`;

const FooterContent = styled.div`
  height: 100%;
  padding: 80px 40px 40px 20px;
  width: 100%;
  background: var(--FooterBg);
  display: flex;
  flex-direction: column;
  ${mobile({
    padding: "140px 10px 10px 0px",
  })}
`;
const LogoContainer = styled.div`
  margin: 20px 0px 0px 0px;
`;
const ContactContainer = styled.div`
  margin: 20px 0px 0px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  jusity-content: space-evenly;
  ${mobile({
    flexDirection: "column",
    alignItems: "flex-start",
  })}
`;
const AdressContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  ${mobile({
    flex: "auto",
    margin: "10px 0px",
    width: "90%",
  })}
`;
const Adress = styled.p`
  font-size: 12px;
  margin-left: 10px;
  width: 90%;
`;
const SupportContainer = styled.div`
  flex: 1;
  margin-left: 20px;
  ${mobile({
    flex: "auto",
    margin: "10px 0px",
    width: "90%",
  })}
`;
const PhoneContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: flex-start;
  align-items: center;
`;
const SupportEmailContainer = styled.div``;
const MenuLink = styled.div`
  flex: 1;
  ${mobile({
    flex: "auto",
    margin: "10px 0px",
    width: "90%",
  })}
`;
const Links = styled.ul`
  columns: 2;
  ${mobile({
    columns: "1",
  })}
`;
const Link = styled.li`
  list-style: none;
  cursor: pointer;
  color: var(--Cyan);
  margin: 10px 0px;
  &:hover {
    color: var(--White);
    font-weight: 700;
  }
`;
const SocialContainer = styled.div`
  flex: 1;
  font-size: 18px;
  display: flex;
  align-items: center;
  jusity-content: space-evenly;
  & > svg {
    transition: 0.2 ease all;
    cursor: pointer;
    font-size: 28px;
    margin-left: 10px;
    &:hover {
      transform: scale(1.2);
    }
  }
  ${mobile({
    width: "100%",
    justifyContent: "center",
  })}
`;

export const FooterSection = () => {
  const [validEmail, setvalidEmail] = useState(true);
  const [emailInput, setemailInput] = useState("");

  const emailValidator = (email) => {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (pattern.test(email)) {
      setvalidEmail(true);
    } else {
      setvalidEmail(false);
    }
  };

  return (
    <Container>
      <ColorDiv></ColorDiv>
      <EmailContainer>
        <Title> Get early access today</Title>
        <Desc>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </Desc>
        <InputContainer>
          <EmailInputContainer>
            <Input
              placeholder="email@example.com"
              type={"email"}
              onChange={(e) => {
                setemailInput(e.target.value);
                emailValidator(emailInput);
              }}
              value={emailInput}
            ></Input>
            {!validEmail && <Span> Please enter valid email adress </Span>}
          </EmailInputContainer>

          <Button> Get started for free </Button>
        </InputContainer>
      </EmailContainer>
      <FooterContent>
        <LogoContainer>
          <Logo className="Logo Small" />
        </LogoContainer>
        <ContactContainer>
          <AdressContainer>
            <Location />
            <Adress>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Adress>
          </AdressContainer>
          <SupportContainer>
            <PhoneContainer>
              <Phone style={{ marginRight: "20px" }} /> +1-543-123-4567
            </PhoneContainer>
            <SupportEmailContainer>
              {" "}
              <Email style={{ marginRight: "20px" }} />
              example@fylo.com{" "}
            </SupportEmailContainer>
          </SupportContainer>
          <MenuLink>
            <Links>
              <Link> About </Link>
              <Link> Jobs </Link>
              <Link> Press </Link>
              <Link> Blog </Link>
              <Link> Contact us </Link>
              <Link> Terms </Link>
              <Link> Privacy </Link>
            </Links>
          </MenuLink>
          <SocialContainer>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </SocialContainer>
        </ContactContainer>
      </FooterContent>
    </Container>
  );
};
