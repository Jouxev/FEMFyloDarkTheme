import styled from "styled-components";
import {
  FeedbackSection,
  HeroSection,
  NavBar,
  ProductiveSection,
  ServiceSection,
} from "../Components";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 20px 0px;
`;

export const LandingPage = () => {
  return (
    <Container>
      <NavBar />
      <HeroSection />
      <ServiceSection />
      <ProductiveSection />
      <FeedbackSection />
    </Container>
  );
};
