import React, { useState } from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import AuthSection from "../components/sections/auth/AuthSection";
import { UserProvider } from "../providers/userContext";

export default function AuthPage() {
  return (
    <UserProvider>
      <Layout>
        <AuthSection />
      </Layout>
    </UserProvider>
  );
}
