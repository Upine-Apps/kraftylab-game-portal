import React from "react"
import SnugLayout from "../components/layout/SnugLayout"
import SEO from "../components/layout/seo"
import TermsAndCondition from "../components/sections/TermsAndCondition"

function TermsAndConditionPage() {
  return (
    <SnugLayout>
      <SEO title="Upine Apps Terms And Condition" />
      <TermsAndCondition />
    </SnugLayout>
  )
}

export default TermsAndConditionPage
