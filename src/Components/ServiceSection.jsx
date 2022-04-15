import styled from "styled-components";
import accessAnyWhere from "../Assets/Images/icon-access-anywhere.svg";
import iconSecurity from "../Assets/Images/icon-security.svg";
import iconCollaboration from "../Assets/Images/icon-collaboration.svg";
import iconAnyFile from "../Assets/Images/icon-any-file.svg";
import { mobile } from "../responsive";

const Container = styled.section`
  background-color: var(--InputBg);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  ${mobile({
    padding: "20px 0px 0px 20px",
  })}
`;

const ServicesContainer = styled.div`
  margin: 40px 0px;
  padding: 20px 40px;
  height: auto;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
`;

const Service = styled.div`
  width: 300px;
`;
const Image = styled.img``;
const Title = styled.h1`
  font-weight: 700;
`;

const Desc = styled.p`
  font-size: 12px;
`;

export const ServiceSection = () => {
  return (
    <Container>
      <ServicesContainer>
        <Service>
          <Image src={accessAnyWhere} alt="service" />
          <Title> Get Started Access your files, anywhere </Title>
          <Desc>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </Desc>
        </Service>
        <Service>
          <Image src={iconSecurity} alt="service" />
          <Title> Security you can trust </Title>
          <Desc>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </Desc>
        </Service>
        <Service>
          <Image src={iconCollaboration} alt="service" />
          <Title> Real-time collaboration </Title>
          <Desc>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </Desc>
        </Service>
        <Service>
          <Image src={iconAnyFile} alt="service" />
          <Title> Store any type of file</Title>
          <Desc>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared. Stay productive, wherever you are Never let location be an
            issue when accessing your files. Fylo has you covered for all of
            your file storage needs.
          </Desc>
        </Service>
      </ServicesContainer>
    </Container>
  );
};
