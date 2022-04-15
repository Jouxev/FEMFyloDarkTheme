import styled from "styled-components";
import IllustationImage from "../Assets/Images/illustration-intro.png";
import BgCurveryDesktop from "../Assets/Images/bg-curvy-desktop.svg";
import BgCurveryMobile from "../Assets/Images/bg-curvy-mobile.svg";

import { mobile } from "../responsive";
const Container = styled.section`
  height: 100%;
  width: 100%;
  text-align: center;
  background: no-repeat url(${BgCurveryDesktop});
  background-position: 0px 250px;
  ${mobile({
    margin: "20px 0px 0px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: `no-repeat url(${BgCurveryMobile})`,
    backgroundPosition: "left bottom",
  })}
`;

const Image = styled.img`
  width: 480px;
  ${mobile({
    width: "65%",
  })}
`;

const Title = styled.h1`
  font-weight: 700;
  ${mobile({
    width: "70%",
  })}
`;
const CallToAction = styled.div``;
const Desc = styled.p`
  font-weight: 400;
  color: var(--Cyan);
  margin: 20px 0px;
  ${mobile({
    margin: "20px 20px",
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
`;

export const HeroSection = () => {
  return (
    <Container>
      <Image src={IllustationImage} alt="hero image" />
      <Title>
        All your files in one secure location, <br /> accessible anywhere.{" "}
      </Title>
      <CallToAction>
        <Desc>
          Fylo stores all your most important files in one secure location.
          <br /> Access them wherever you need, share and collaborate with{" "}
          <br />
          friends family, and co-workers.
        </Desc>
        <Button> Get Started </Button>
      </CallToAction>
    </Container>
  );
};
