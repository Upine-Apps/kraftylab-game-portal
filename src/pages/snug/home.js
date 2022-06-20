import React from "react"
import SnugLayout from "../../components/layout/SnugLayout"
import SEO from "../../components/layout/seo"
import SnugHowItWorks from "../../components/sections/SnugHowItWorks"
import SnugHero from "../../components/sections/SnugHero"
import SnugCustomerReview from "../../components/sections/SnugCustomerReview"
import SnugRoadmap from "../../components/sections/SnugRoadmap"
import SnugAbout from "../../components/sections/SnugAbout"
import SnugFAQ from "../../components/sections/SnugFAQ"
import SnugContactUs from "../../components/sections/SnugContactUs"

function SnugPage() {
  return (
    <SnugLayout>
      <SEO title="Snug" />
      <SnugHero />
      <SnugAbout />
      <SnugHowItWorks />
      <SnugCustomerReview />
      <SnugRoadmap />
      <SnugFAQ />
      <SnugContactUs />
    </SnugLayout>
  )
}

export default SnugPage
