import React from "react"
import styled from "styled-components"
import {
  BodyIntro,
  BodyMain,
  Caption,
  MediumText,
  SmallText,
} from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import Level from "../progress/Level"

export default function EmployeeCard(props) {
  const { item } = props
  return (
    <Wrapper>
      <SecondaryWrapper>
        <ProfileWrapper>
          <AvatarWrapper>
            <img src={item.avatarIcon} alt="avatar" className="avatarImage" />
            <TextWrapper>
              <AvatarTitle>{item.title}</AvatarTitle>
              <Description>{item.description}</Description>
            </TextWrapper>
            <SocialMediaLinks>
              <a href={item.websiteLink} target="_blank">
                <img src="/images/icons/web.svg" className="socialMediaIcon" />
              </a>
              <a href={item.linkedin} target="_blank">
                <img
                  src="/images/icons/linkedin.svg"
                  className="socialMediaIcon"
                />
              </a>
              <a href={item.github} target="_blank">
                <img
                  src="/images/icons/github.svg"
                  className="socialMediaIcon"
                />
              </a>
            </SocialMediaLinks>
          </AvatarWrapper>
        </ProfileWrapper>
        <SkillsWrapper>
          <SkillCard>
            <Skill>{item.skillOneTitle}</Skill>
            <LevelWrapper>
              <Level percentage={item.skillOnePercent}></Level>
            </LevelWrapper>
            <SkillSubtitle>{item.skillOneDesc}</SkillSubtitle>
          </SkillCard>
          <SkillCard>
            <Skill>{item.skillTwoTitle}</Skill>
            <LevelWrapper>
              <Level percentage={item.skillTwoPercent}></Level>
            </LevelWrapper>
            <SkillSubtitle>{item.skillTwoDesc} </SkillSubtitle>
          </SkillCard>
          <SkillCard>
            <Skill>{item.skillThreeTitle}</Skill>
            <LevelWrapper>
              <Level percentage={item.skillThreePercent}></Level>
            </LevelWrapper>
            <SkillSubtitle>{item.skillThreeDesc}</SkillSubtitle>
          </SkillCard>
        </SkillsWrapper>
      </SecondaryWrapper>
    </Wrapper>
  )
}

// export default function Skills(props) {
//   const { item } = props
//   return (
//     <>
//       <SkillCard>
//         <Skill>{item.skillOneTitle}</Skill>
//         <LevelWrapper>
//           <Level percentage="80%"></Level>
//         </LevelWrapper>
//         <SkillSubtitle>{item.skillOneDesc}</SkillSubtitle>
//       </SkillCard>
//       <SkillCard>
//         <Skill>{item.skillTwoTitle}</Skill>
//         <LevelWrapper>
//           <Level percentage="60%"></Level>
//         </LevelWrapper>
//         <SkillSubtitle>{item.skillTwoDesc} </SkillSubtitle>
//       </SkillCard>
//       <SkillCard>
//         <Skill>item.skillThreeTitle</Skill>
//         <LevelWrapper>
//           <Level percentage="40%"></Level>
//         </LevelWrapper>
//         <SkillSubtitle>item.skillThreeDesc</SkillSubtitle>
//       </SkillCard>
//     </>
//   )
// }

const Wrapper = styled.div`
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  width: 600px;
  height: 400px;
  padding: 20px 20px;

  background: rgba(15, 14, 71, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-sizing: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }
`

const SecondaryWrapper = styled.div`
  display: grid;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 100%;

  grid-template-columns: 240px 374px;
`

const ProfileWrapper = styled.div`
  width: 100%;
  background: linear-gradient(200.42deg, #844ffc 13.57%, #491eb8 98.35%);
  border-radius: 10px;
`

const AvatarWrapper = styled.div`
  position: relative;
  /* border: 1px solid white; */
  position: static;
  width: 200px;
  height: 240px;
  left: 56px;
  top: 20px;
  transform: translateY(50px);
  margin: auto;
  display: grid;
  grid-template-rows: auto auto auto auto;
  justify-items: center;
  .avatarImage {
    width: 90px;
    border-radius: 50px;
    /* border: 1px solid green; */
    margin: auto;
  }
`

const TextWrapper = styled.div`
  /* border: 1px solid yellow; */
  /* max-width: 360px;
  max-height: 175px;
  display: grid;
  gap: 20px; */
`

const AvatarTitle = styled(BodyMain)`
  font-size: 28px;
  font-weight: 600;
  color: ${themes.dark.text1};
  text-align: center;
`

const Description = styled(SmallText)`
  text-align: center;
  color: ${themes.dark.text1};
`
const SocialMediaLinks = styled.div`
  position: absolute;
  /* border: 1px solid blue; */
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  top: 85%;

  .socialMediaIcon {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      transform: translateY(-3px);
    }
  }
`

const SkillsWrapper = styled.div`
  position: relative;
  display: grid;
  padding: 20px 20px 20px 20px;
  height: 100%;
`

const SkillCard = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  align-content: space-between;
  margin: 5px;
  /* background: rgba(255, 255, 255, 0.1); */
  border-radius: 5px;
  grid-template-rows: 40% 20% 40%;
`

const Skill = styled(BodyIntro)`
  color: ${themes.dark.text1};
  padding-left: 10px;
`

const LevelWrapper = styled.div`
  position: relative;
  display: grid;
  padding-left: 10px;
  align-items: center;
`

const SkillSubtitle = styled(MediumText)`
  color: ${themes.dark.text1};
  align-self: center;
  padding-left: 10px;
`

const Title = styled(Caption)`
  color: ${themes.dark.text1};
`

const Subtitle = styled(SmallText)`
  color: ${themes.dark.text2};
  opacity: 0.7;
`

const Icon = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  right: 25px;
  top: 25px;
  z-index: 1;
`
