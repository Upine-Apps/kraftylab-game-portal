import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H3, H1, MediumText } from "../styles/TextStyles"
import TermsAndPrivacyBackground from "../backgrounds/TermsAndPrivacyBackground"

function Privacy() {
  return (
    <Wrapper>
      <TermsAndPrivacyBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>Snug Privacy Policy</Title>
          <Description>Updated Dec. 24, 2021</Description>
          <Description>
            With Snug - Safer Dating (Snug), accessible from the App Store and
            the Google Play Store, one of our main priorities is the privacy of
            our users. This Privacy Policy document contains types of
            information that is collected and recorded by Snug and how we use
            it. If you have additional questions or require more information
            about our Privacy Policy, do not hesitate to contact us. This
            Privacy Policy applies only to our online activities and is valid
            for users of our software with regards to the information that they
            shared and/or collect in Snug. This policy is not applicable to any
            information collected offline or via channels other than this
            software.
          </Description>
          <Subtitle>Consent</Subtitle>
          <Description>
            By using our software, you hereby consent to our Privacy Policy and
            agree to its terms.
          </Description>
          <Subtitle>Information we collect</Subtitle>
          <Description>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. If you
            contact us directly, we may receive additional information about you
            such as your name, email address, phone number, the contents of the
            message and/or attachments you may send us, and any other
            information you may choose to provide. When you register for an
            Account, we may ask for your contact information, including items
            such as name, phone number, zip code, and physical features. This is
            all used for the core functionality of the application. When you
            enter your information, you are consenting to allowing other users
            to search for your general appearance by phone number. This is used
            to auto-fill date information. Searching for a user's phone number
            only returns data if the user searched for has created an account
            with Snug.
          </Description>
          <Subtitle>How we use your information</Subtitle>
          <Description>
            We use the information we collect in various ways, including to:
            <br />
            • Provide, operate, and maintain our software
            <br />
            • Personalize, and expand our software
            <br />
            • Understand and analyze what demographic groups use our software
            <br />• Communicate with you directly, for core service
            functionality
          </Description>
          <Subtitle>Log Files</Subtitle>
          <Description>
            Snug follows a standard procedure of using log files. These files
            log your interaction with the software. The information collected by
            log files include which features you click on, and are only used to
            help debug and resolve any issues with the application. These are
            not linked to any information that is personally identifiable. This
            information is stored on your device and is only sent to us if you
            manually choose to.
          </Description>
          <Subtitle>Cookies</Subtitle>
          <Description>
            Snug uses "cookies". These cookies are used to store information
            including user preferences. The information is used to optimize the
            user experience by customizing the sign in content based on user's
            first name and what color theme they prefer.
          </Description>
          <Subtitle>Logging</Subtitle>
          <Description>
            Snug logs data within the app for the sole purpose of debugging.
            This data is only sent to the developers by a user-directed action.
            No Personal Identifying information beyond what the user has already
            provided is sent to the developers through logs. Possible examples
            of what information is available through logs is as follows:
            <br />
            • Buttons being pressed
            <br />
            • Screens being visited
            <br />• API return statuses from our services
          </Description>
          <Subtitle>Service Partners Privacy Policies</Subtitle>
          <Description>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Snug.
            <br />
            • Google Maps
            <br />
            • Amazon Web Services (AWS)
            <br />
            Third-party services use technologies like cookies, JavaScript, or
            Web Beacons that are used in their respective services that appear
            on or are used by Snug. In some cases, they automatically receive
            your IP address when this occurs. Note that Snug has no access to or
            control over these cookies that are used by third-party services.
          </Description>
          <Subtitle>Third Party Privacy Policies</Subtitle>
          <Description>
            Snug's Privacy Policy does not apply to other advertisers, websites,
            or software. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party services for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.
          </Description>
          <Subtitle>
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </Subtitle>
          <Description>
            Under the CCPA, among other rights, California consumers have the
            right to:
            <br />
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
            <br />
            Request that a business delete any personal data about the consumer
            that a business has collected.
            <br />
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
            <br />
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Description>
          <Subtitle>GDPR Data Protection Rights</Subtitle>
          <Description>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
            <br />
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
            <br />
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
            <br />
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
            <br />
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
            <br />
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
            <br />
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
            <br />
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Description>
          <Subtitle>Children's Information</Subtitle>
          <Description>
            Another part of our priority is adding protection for children while
            using our software. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity. Snug
            does not knowingly collect any Personal Identifiable Information
            from children under the age of 13. If you think that your child
            provided this kind of information on our website, we strongly
            encourage you to contact us immediately and we will do our best
            efforts to promptly remove such information from our records.
          </Description>
          <Subtitle>Updates to Privacy Policy</Subtitle>
          <Description>
            This Privacy Policy can be updated at any time without notice.
            Continued use of Snug by Upine Apps LLC constitutes agreement with
            this Privacy Policy
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Privacy

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
