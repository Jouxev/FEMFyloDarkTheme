import styled from "styled-components";
import {
  FeedbackSection,
  FooterSection,
  HeroSection,
  NavBar,
  ProductiveSection,
  ServiceSection,
} from "../Components";

const Container = styled.main``;
const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 0px 0px 0px;
`;

export const LandingPage = () => {
  return (
    <Container>
      <MainContainer>
        <NavBar />
        <HeroSection />
        <ServiceSection />
        <ProductiveSection />
        <FeedbackSection />
      </MainContainer>
      <FooterSection />
    </Container>
  );
};
