import styled from "styled-components";
import productiveImage from "../Assets/Images/illustration-stay-productive.png";
import { ReactComponent as IconLocation } from "../Assets/Images/icon-arrow.svg";
import { mobile } from "../responsive";
const Container = styled.section`
  height: 100%;
  width: 100%;
  background: var(--InputBg);
  display: flex;
  justify-content: center;
  ${mobile({
    padding: "20px 0px 0px 20px",
  })}
`;

const ProductiveContainer = styled.div`
  margin: 40px 0px;
  padding: 20px 40px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    flexDirection: "column",
    width: "100%",
  })}
`;
const Right = styled.div`
  margin-right: 10px;
`;

const Image = styled.img`
  width: 400px;
  ${mobile({
    width: "280px",
  })}
`;
const Left = styled.div`
  margin-left: 10px;
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
`;
const Desc = styled.p`
  margin: 10px 0px;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: underline;
  color: var(--Cyan);
`;

export const ProductiveSection = () => {
  return (
    <Container>
      <ProductiveContainer>
        <Right>
          <Image src={productiveImage} alt="productive" />
        </Right>
        <Left>
          <Title>
            Stay Productive, <br /> wherever you are{" "}
          </Title>
          <Desc>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </Desc>
          <Desc>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </Desc>
          <Link href="#">
            {" "}
            See how Fylo works <IconLocation />{" "}
          </Link>
        </Left>
      </ProductiveContainer>
    </Container>
  );
};
