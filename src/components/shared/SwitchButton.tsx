import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  setDays: React.Dispatch<React.SetStateAction<number>>;
  switcher: number;
};

const SwitchButton = ({ text, setDays, switcher }: Props) => {
  const handleClick = () => {
    setDays(switcher);
  };

  return <Button onClick={handleClick}>{text}</Button>;
};

export default SwitchButton;

const Button = styled.button`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
  font-size: 14px;
`;
