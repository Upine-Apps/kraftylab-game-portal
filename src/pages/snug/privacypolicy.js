import React from "react"
import SnugLayout from "../../components/layout/SnugLayout"
import SEO from "../../components/layout/seo"
import SnugPrivacy from "../../components/sections/SnugPrivacy"

function PrivacyPage() {
  return (
    <SnugLayout>
      <SEO title="Upine Apps Privacy Policy" />
      <SnugPrivacy />
    </SnugLayout>
  )
}

export default PrivacyPage
