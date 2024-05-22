import React from "react";
import styled from "styled-components";

type Props = {
  theme: string;
  toggleTheme: () => void;
};

const AppHeader = ({ theme, toggleTheme }: Props) => {
  return (
    <Header>
      Weather Forecast
      <Button onClick={toggleTheme}>{theme}</Button>
    </Header>
  );
};

export default AppHeader;

const Header = styled.header`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.headerFooterBg};
`;

const Button = styled.button`
  padding: 0.2rem;
  font-size: 16px;
`;
