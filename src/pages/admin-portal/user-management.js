import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import UserManagementSection from "../../components/sections/admin-portal/user/UserManagementSection";
import GameHeader from "../../components/layout/GameHeader";
import { useState, useEffect } from "react";
import UserService from "../../service/UserService";
import UnauthorizedSection from "../../components/sections/auth/UnauthorizedSection";
import DefaultSpinner from "../../components/spinners/DefaultSpinner";
import Cookies from "universal-cookie";

function UserManagement() {
  const [authenticated, setAuthenticated] = useState();
  const cookies = new Cookies();
  const isAdmin = cookies.get("admin");
  const renderPage = () => {
    if (authenticated == true && isAdmin == "true") {
      return (
        <Layout>
          <SEO title="admin-portal" />
          <GameHeader />
          <UserManagementSection />
        </Layout>
      );
    } else if (authenticated == false || isAdmin == "false") {
      return (
        <Layout>
          <GameHeader />
          <UnauthorizedSection />
        </Layout>
      );
    } else {
      return (
        <Layout>
          <Wrapper>
            <ContentWrapper>
              <DefaultSpinner isDark={true} />
            </ContentWrapper>
          </Wrapper>
        </Layout>
      );
    }
  };

  useEffect(() => {
    let isMounted = true;
    UserService.validateToken().then((response) => {
      if (isMounted) {
        setAuthenticated(response);
        setTimeout(function () {}, 2000);
      }
    });
  }, []);

  return renderPage();
}

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  top: 200px;
  height: 800px;
  align-content: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  height: 200px;
  margin: 0 auto;
  width: 75%;
  justify-content: center;
  align-content: center;
  gap: 30px;
`;

export default UserManagement;
