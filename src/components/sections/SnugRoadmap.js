import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import SnugRoadmapWave from "../backgrounds/SnugRoadmapWave"

function SnugRoadmap() {
  return (
    <Wrapper id="road-map">
      <SnugRoadmapWave />
      <ContentWrapper>
        <Title>Snug Roadmap</Title>
        <LeftColumnWrapper>
          <Stop>
            <DateWrapper>
              <Date>May 2021</Date>
            </DateWrapper>
            <TimeLine>
              <img src="/images/snug/roadmap-beta.svg" className="icon" />
              <Divider />
            </TimeLine>
            <StopDescriptionWrapper>
              <Description>
                Closed beta for Snug. Around 30 participants helped us catch
                bugs and fine-tune features in preparation for a public release.
                Infrastructure was tested behind the scenes.
              </Description>
            </StopDescriptionWrapper>
          </Stop>
          <Stop>
            <DateWrapper>
              <Date>June 2021</Date>
            </DateWrapper>
            <TimeLine>
              <img src="/images/snug/roadmap-v1.svg" className="icon" />
              <Divider />
            </TimeLine>
            <StopDescriptionWrapper>
              <Description>
                Public launch of Snug - Safer Dating. The app quickly spread to
                users across America through word of mouth and the use of social
                media.
              </Description>
            </StopDescriptionWrapper>
          </Stop>
          <Stop>
            <DateWrapper>
              <Date>September 2021</Date>
            </DateWrapper>
            <TimeLine>
              <img src="/images/snug/roadmap-charity.svg" className="icon" />
              <Divider />
            </TimeLine>
            <StopDescriptionWrapper>
              <Description>
                Sticking with our desire to give back, we sponsored multiple
                philanthropic events with university organizations to spread the
                word about safer dating.
              </Description>
            </StopDescriptionWrapper>
          </Stop>
          <Stop>
            <DateWrapper>
              <Date>January 2022</Date>
            </DateWrapper>
            <TimeLine>
              <img src="/images/snug/roadmap-v2.svg" className="icon" />
              <Divider />
            </TimeLine>
            <StopDescriptionWrapper>
              <Description>
                User feedback suggested a visual overhaul of Snug. We're
                coupling this with the most requested features. Snug 2.0 is
                expected to finish development in early 2022.
              </Description>
            </StopDescriptionWrapper>
          </Stop>
          <Stop>
            <DateWrapper>
              <Date>TBD</Date>
            </DateWrapper>
            <TimeLine>
              <img src="/images/snug/roadmap-features.svg" className="icon" />
              <LastDivider />
            </TimeLine>
            <StopDescriptionWrapper>
              <Description>
                Users' most requested features implemented into Snug. These
                additional features improve date features and expand safety to
                additional lifestyles.
              </Description>
            </StopDescriptionWrapper>
          </Stop>
        </LeftColumnWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SnugRoadmap

const LeftColumnWrapper = styled.div`
  display: grid;
  margin: auto 0;
  justify-self: center;
`

const TimeLine = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  img {
    width: 100px;
    align-self: center;
    justify-self: center;
    @media (max-width: 450px) {
      width: 50px;
    }
  }

  .icon {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      transform: translateY(-3px);
    }
  }
`

const StopDescriptionWrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 70px;
  justify-self: center;
`

const DateWrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 70px;
  justify-self: center;
`

const Stop = styled.div`
  display: grid;
  grid-template-columns: 250px 150px auto;
  @media (max-width: 450px) {
    grid-template-columns: 50px 100px auto;
  }
`

const Divider = styled.div`
  border-left: 3px solid rgba(255, 255, 255, 0.3);
  height: 50px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  left: 50%;
`
const LastDivider = styled.div`
  border-left: 3px solid rgba(255, 255, 255, 0);
  height: 50px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  left: 50%;
`

const Wrapper = styled.div`
  overflow: hidden;
  height: 1200px;
`

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 30px 120px 30px;
  display: grid;
  // grid-template-columns: 200px 150px auto;
  gap: 60px;
  @media (max-width: 450px) {
    max-width: 450px;
  }
`

const Title = styled(H1)`
  justify-self: center;
  padding: 10px;
  background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 50px;
    color: transparent;
  }
  @media (max-width: 450px) {
    font-size: 48px;
    max-width: 450px;
  }
`

const Date = styled(MediumText)`
  // padding: 10px;
  align-self: center;
  color: ${themes.dark.text1};
  @media (max-width: 450px) {
    font-size: 12px;
  }
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
  padding-top: 37px;
  @media (max-width: 450px) {
    font-size: 12px;
    padding-top: 0px;
  }
  // padding: 10px;
`
