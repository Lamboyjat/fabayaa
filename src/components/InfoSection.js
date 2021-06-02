import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.section`
  padding: 4rem 0rem;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 760px) {
    grid-template-rows: 1fr;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  @media screen and (max-width: 760px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 760px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ContainerLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/home" primary="true">
            {buttonLabel}
          </Button>
        </ContainerLeft>
        <ContainerRight reverse={reverse}>
          <img src={image} alt="home" />
        </ContainerRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
