import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { H1 } from "../../styles/TextStyles";
import { navigate } from "gatsby";

export default function UnauthorizedSection() {
  useEffect(() => {
    setTimeout(function () {
      navigate("/auth");
    }, 4000);
  }, []);

  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Oops! Your session expired. Taking you back to the login screen.
          </Title>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  top: 200px;
  height: 800px;
  align-content: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  height: 200px;
  margin: 0 auto;
  width: 75%;
  justify-content: center;
  align-content: center;
  gap: 30px;
`;

const TextWrapper = styled.div`
  display: grid;
  padding: 10px;
`;

const Title = styled(H1)`
  background: radial-gradient(
    218.51% 281.09% at 100% 100%,
    rgba(49, 220, 113, 0.6) 0%,
    rgba(76, 0, 200, 0.6) 45.83%,
    rgba(76, 0, 200, 0.6) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 48;
  text-align: center;
  line-break: auto;
  padding: 10px;
`;
