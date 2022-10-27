/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React, { useState } from "react";
import { UserProvider } from "./src/providers/userContext";
const wrapRootElement = ({ element }) => {
  return <UserProvider>{element}</UserProvider>;
};
export { wrapRootElement };
