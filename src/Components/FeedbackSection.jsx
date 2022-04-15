import styled from "styled-components";
import profile1 from "../Assets/Images/profile-1.jpg";
import profile3 from "../Assets/Images/profile-3.jpg";
import profile2 from "../Assets/Images/profile-2.jpg";
import quotes from "../Assets/Images/bg-quotes.png";
import { mobile } from "../responsive";

const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background: no-repeat url(${quotes});
  background-position: 180px 25px;
  background-color: var(--InputBg);
  justify-content: center;
  ${mobile({
    backgroundPosition: "40px 0px",
    padding: "20px 0px 0px 20px",
  })}
`;

const CardContainer = styled.div`
  display: flex;
  margin: 40px 0px;
  jusitfy-content: center;
  align-items: center;
  ${mobile({
    margin: "0",
    flexDirection: "column",
  })}
`;

const Card = styled.div`
  padding: 20px 30px;
  width: 260px;
  background: var(--MainBg);
  margin-right: 20px;
  border-radius: 5px;
  ${mobile({
    margin: "10px 0px",
  })}
`;

const Desc = styled.p`
  font-size: 12px;
`;
const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;
const AuthorNameContainer = styled.div``;

const AuthorName = styled.h1`
  font-weight: 700;
  font-size: 10px;
  line-height: 0px;
`;
const AuthorRole = styled.p`
  font-weight: 400;
  font-size: 8px;
  color: var(--Cyan);
`;
const AuthorPic = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FeedbackSection = () => {
  return (
    <Container>
      <CardContainer>
        <Card first>
          <Desc>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.{" "}
          </Desc>
          <AuthorContainer>
            <AuthorPic src={profile1} alt="profile" />
            <AuthorNameContainer>
              <AuthorName>Satish Patel </AuthorName>
              <AuthorRole> Founder & CEO, Huddle </AuthorRole>
            </AuthorNameContainer>
          </AuthorContainer>
        </Card>
        <Card>
          <Desc>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.{" "}
          </Desc>
          <AuthorContainer>
            <AuthorPic src={profile2} alt="profile" />
            <AuthorNameContainer>
              <AuthorName>Bruce McKenzie </AuthorName>
              <AuthorRole> Founder & CEO, Huddle </AuthorRole>
            </AuthorNameContainer>
          </AuthorContainer>
        </Card>
        <Card>
          <Desc>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.{" "}
          </Desc>
          <AuthorContainer>
            <AuthorPic src={profile3} alt="profile" />
            <AuthorNameContainer>
              <AuthorName>Ivan Boyd </AuthorName>
              <AuthorRole> Founder & CEO, Huddle </AuthorRole>
            </AuthorNameContainer>
          </AuthorContainer>
        </Card>
      </CardContainer>
    </Container>
  );
};
