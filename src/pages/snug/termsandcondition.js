import React from "react"
import SnugLayout from "../../components/layout/SnugLayout"
import SEO from "../../components/layout/seo"
import SnugTermsAndCondition from "../../components/sections/SnugTermsAndCondition"

function TermsAndConditionPage() {
  return (
    <SnugLayout>
      <SEO title="Upine Apps Terms And Condition" />
      <SnugTermsAndCondition />
    </SnugLayout>
  )
}

export default TermsAndConditionPage
