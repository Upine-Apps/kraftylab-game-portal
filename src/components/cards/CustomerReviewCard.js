import React from "react"
import styled from "styled-components"
import {
  H3,
  H1,
  BodyIntro,
  BodyMain,
  Caption,
  MediumText,
  SmallText,
} from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import SnugCustomerReviewBackground from "../backgrounds/SnugCustomerReviewBackground"

export default function CustomerReviewCard(props) {
  const { text } = props
  return (
    <Wrapper>
      <div className="card1">
        <TextWrapper>
          <Title>No Other App Like This One!</Title>
          <Rating>
            <ReviewName>rico.chris</ReviewName>
            <StarWrapper>
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
            </StarWrapper>
          </Rating>
          <Description>
            Use this app for every date I have. Great when meeting up with new
            people online and are in need that extra security. Hope to see more
            features added!
          </Description>
        </TextWrapper>
      </div>
      <div className="card2">
        <TextWrapper>
          <Title>Amazing!!!</Title>
          <Rating>
            <ReviewName>lauren94382</ReviewName>
            <StarWrapper>
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
            </StarWrapper>
          </Rating>
          <Description>
            This app completely changes the game! One of those things that makes
            you wonder how it hasn’t been invented sooner. Love it!!! :)
          </Description>
        </TextWrapper>
      </div>
      <div className="card3">
        <TextWrapper>
          <Title>Best App Ever</Title>
          <Rating>
            <ReviewName>1andonly1996</ReviewName>
            <StarWrapper>
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
            </StarWrapper>
          </Rating>
          <Description>
            I love this app. Such an amazing concept, intelligent design and
            very well executed through and through. Thank you for helping make
            the world a safer place, Snug! Other dating apps should follow suit
          </Description>
        </TextWrapper>
      </div>
      <div className="card4">
        <TextWrapper>
          <Title>Love this app!</Title>
          <Rating>
            <ReviewName>Mary Grace s</ReviewName>
            <StarWrapper>
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
              <img src="/images/snug/snug-customer-review-star.svg" />
            </StarWrapper>
          </Rating>
          <Description>
            Love this app! Was so easy and made me feel safe!
          </Description>
        </TextWrapper>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  @media (max-width: 450px) {
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    &.card1 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
      :hover {
        transform: translate(-30px, 90px);
        z-index: 10;
      }
    }
    &.card2 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
      :hover {
        transform: translate(-30px, 90px);
        z-index: 10;
      }
    }
    &.card3 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
      :hover {
        transform: translate(-30px, 90px);
        z-index: 10;
      }
    }
    &.card4 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
      :hover {
        transform: translate(-30px, 90px);
        z-index: 10;
      }
    }
  }
  .card1 {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
    display: grid;
    grid-template-rows: auto auto auto;
    position: absolute;
    width: 425px;
    height: 290px;
    background: radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgba(253, 63, 51, 0.6) 0%,
      rgba(76, 0, 200, 0.6) 45.83%,
      rgba(76, 0, 200, 0.6) 100%
    );
    box-shadow: rgb(39 77 153 / 20%) 0px 30px 60px,
      rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;

    border-radius: 30px;
    backdrop-filter: blur(20px);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;

    z-index: 5;

    @media (max-width: 450px) {
      max-width: 270px;
      max-height: 175px;
    }
  }
  .card2 {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
    position: absolute;
    width: 425px;
    height: 290px;
    top: 20px;
    left: 200px;
    background: radial-gradient(
      100% 128.38% at 100% 100%,
      rgba(51, 168, 253, 0.2) 0%,
      rgba(76, 0, 200, 0.2) 100%
    );
    box-shadow: rgb(39 77 153 / 20%) 0px 30px 60px,
      rgb(0 0 0 / 20%) 0px 0px 0px 0.5px inset;
    border-radius: 30px;
    backdrop-filter: blur(20px);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 20px;
    z-index: 4;
    @media (max-width: 450px) {
      left: 20px;
      max-width: 270px;
      max-height: 175px;
    }
  }
  .card3 {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
    position: absolute;
    width: 425px;
    height: 290px;
    top: 40px;
    left: 280px;
    background: radial-gradient(
      120% 154.37% at 100% 100%,
      rgba(51, 253, 241, 0.1) 0%,
      rgba(200, 96, 0, 0.1) 100%
    );
    box-shadow: rgb(39 77 153 / 20%) 0px 30px 60px,
      rgb(0 0 0 / 20%) 0px 0px 0px 0.5px inset;
    border-radius: 30px;
    backdrop-filter: blur(20px);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 20px;
    z-index: 3;
    @media (max-width: 450px) {
      left: 70px;
      max-width: 270px;
      max-height: 175px;
    }
  }
  .card4 {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
    position: absolute;
    width: 425px;
    height: 290px;
    top: 60px;
    left: 310px;
    background: linear-gradient(rgb(117, 224, 230) 0%, rgb(57, 19, 184) 100%);
    box-shadow: rgb(39 77 153 / 20%) 0px 30px 60px,
      rgb(0 0 0 / 20%) 0px 0px 0px 0.5px inset;
    border-radius: 30px;
    backdrop-filter: blur(20px);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 20px;
    z-index: 2;
    @media (max-width: 450px) {
      left: 100px;
      max-width: 270px;
      max-height: 175px;
    }
  }
`
const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 30px auto;
  position: absolute;
  width: 425px;
  height: 290px;
  top: 0px;
  left: 0px;
  padding: 20px;
  @media (max-width: 450px) {
    grid-template-rows: 25px 5px auto;
    padding: 20px;
  }
`

const Title = styled(H3)`
  color: ${themes.dark.text1};
  @media (max-width: 450px) {
    font-size: 16px;
  }
`
const Rating = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  align-items: flex-start;
  padding-top: 10px;
  @media (max-width: 450px) {
    grid-template-columns: 100px 170px;
  }
`

const ReviewName = styled(MediumText)`
  color: ${themes.dark.text1};
  margin: auto 0;
  @media (max-width: 450px) {
    font-size: 12px;
  }
`

const StarWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  img {
    width: 25px;
    @media (max-width: 450px) {
      width: 15px;
    }
  }
  @media (max-width: 450px) {
    max-width: 100px;
  }
  margin: auto 0;
`
const Description = styled(MediumText)`
  color: ${themes.dark.text1};
  padding-top: 30px;
  @media (max-width: 450px) {
    font-size: 12px;
    width: 230px;
  }
`
