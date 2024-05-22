import React from "react";
import styled from "styled-components";

const AppFooter = () => {
  return <Footer>All rights reserved 2024</Footer>;
};

export default AppFooter;

const Footer = styled.footer`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.headerFooterBg};
`;
