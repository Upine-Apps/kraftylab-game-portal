import React from "react";
import Layout from "../components/layout/layout";
import AuthSection from "../components/sections/auth/AuthSection";
import { UserContext } from "../providers/userContext";

export default function AuthPage() {
  return (
    <UserContext.Consumer>
      {(context) => (
        <Layout>
          <AuthSection context={context} />
        </Layout>
      )}
    </UserContext.Consumer>
  );
}
