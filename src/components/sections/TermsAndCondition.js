import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H3, H1, MediumText } from "../styles/TextStyles"
import TermsAndPrivacyBackground from "../backgrounds/TermsAndPrivacyBackground"

function TermsAndCondition() {
  return (
    <Wrapper>
      <TermsAndPrivacyBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>Snug End-User License Agreement (EULA)</Title>
          <Description>Updated Dec. 24, 2021</Description>
          <Subtitle>About</Subtitle>
          <Description>
            This End-User License Agreement ("EULA") is a legal agreement
            between you and Upine Apps LLC. This EULA agreement governs your
            acquisition and use of our Snug - Safer Dating ("Snug") software
            ("Software") directly from Upine Apps LLC or indirectly through a
            Upine Apps LLC authorized reseller or distributor (a "Reseller").
            Please read this EULA agreement carefully before completing the
            installation process and using the Snug software. It provides a
            license to use the Snug software and contains warranty information
            and liability disclaimers. If you register for a free trial of the
            Snug software, this EULA agreement will also govern that trial. By
            clicking "accept" or installing and/or using the Snug software, you
            are confirming your acceptance of the Software and agreeing to
            become bound by the terms of this EULA agreement. If you are
            entering into this EULA agreement on behalf of a company or other
            legal entity, you represent that you have the authority to bind such
            entity and its affiliates to these terms and conditions. If you do
            not have such authority or if you do not agree with the terms and
            conditions of this EULA agreement, do not install or use the
            Software, and you must not accept this EULA agreement. This EULA
            agreement shall apply only to the Software supplied by Upine Apps
            LLC herewith regardless of whether other software is referred to or
            described herein. The terms also apply to any Upine Apps LLC
            updates, supplements, Internet-based services, and support services
            for the Software, unless other terms accompany those items on
            delivery. If so, those terms apply. This EULA can be updated at any
            time without notice. Continued use of Snug by Upine Apps LLC
            constitutes agreement with this EULA.
          </Description>
          <Subtitle>License Grant</Subtitle>
          <Description>
            Upine Apps LLC hereby grants you a personal, non-transferable,
            non-exclusive licence to use the Snug software on your devices in
            accordance with the terms of this EULA agreement. You are permitted
            to load the Snug software (for example a PC, laptop, mobile or
            tablet) under your control. You are responsible for ensuring your
            device meets the minimum requirements of the Snug software. You are
            not permitted to:
            <br />
            • Edit, alter, modify, adapt, translate or otherwise change the
            whole or any part of the Software nor permit the whole or any part
            of the Software to be combined with or become incorporated in any
            other software, nor decompile, disassemble or reverse engineer the
            Software or attempt to do any such things
            <br />
            • Reproduce, copy, distribute, resell or otherwise use the Software
            for any commercial purpose
            <br />
            • Allow any third party to use the Software on behalf of or for the
            benefit of any third party
            <br />
            • Use the Software in any way which breaches any applicable local,
            national or international law
            <br />
            • Use the Software for any purpose that Upine Apps LLC considers is
            a breach of this EULA agreement
            <br />
          </Description>
          <Subtitle>Intellectual Property and Ownership</Subtitle>
          <Description>
            Upine Apps LLC shall at all times retain ownership of the Software
            as originally downloaded by you and all subsequent downloads of the
            Software by you. The Software (and the copyright, and other
            intellectual property rights of whatever nature in the Software,
            including any modifications made thereto) are and shall remain the
            property of Upine Apps LLC. Upine Apps LLC reserves the right to
            grant licences to use the Software to third parties.
          </Description>
          <Subtitle>Termination</Subtitle>
          <Description>
            This EULA agreement is effective from the date you first use the
            Software and shall continue until terminated. You may terminate it
            at any time upon written notice to Upine Apps LLC. It will also
            terminate immediately if you fail to comply with any term of this
            EULA agreement. Upon such termination, the licenses granted by this
            EULA agreement will immediately terminate and you agree to stop all
            access and use of the Software. The provisions that by their nature
            continue and survive will survive any termination of this EULA
            agreement.
          </Description>
          <Subtitle>Disclaimer</Subtitle>
          <Description>
            By using this application, you agree that Upine Apps is not
            responsible for your safety on events you plan through Snug and that
            we provide no actual security or safety during an event.
          </Description>
          <Subtitle>Governing Law</Subtitle>
          <Description>
            This EULA agreement, and any dispute arising out of or in connection
            with this EULA agreement, shall be governed by and construed in
            accordance with the laws of the United States of America.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default TermsAndCondition

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 250px;
  @media (max-width: 450px) {
    padding: 250px 10px 0px 10px;
  }
`

const TextWrapper = styled.div``

const Title = styled(H1)`
  background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding-bottom: 10px;
`

const Subtitle = styled(H3)`
  color: ${themes.dark.text1};
  padding-bottom: 20px;
  padding-top: 20px;
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
  padding-left: 10px;
  padding-bottom: 20px;
`
