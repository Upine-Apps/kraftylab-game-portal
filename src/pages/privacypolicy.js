import React from "react"
import SnugLayout from "../components/layout/SnugLayout"
import SEO from "../components/layout/seo"
import Privacy from "../components/sections/Privacy"

function PrivacyPage() {
  return (
    <SnugLayout>
      <SEO title="Upine Apps Privacy Policy" />
      <Privacy />
    </SnugLayout>
  )
}

export default PrivacyPage
