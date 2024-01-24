import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder?: string; 
  $stretch?: boolean;
}

const Input: React.FC<InputProps> = ({placeholder, $stretch}) => {

  return (
    <S.Input $stretch={$stretch} placeholder={placeholder}></S.Input>
  );
};

const S = {
    Input: styled.input<InputProps>`
        width: ${(props) => (props.$stretch ? '100%' : 'auto')};
        border-radius: 20px;
    `
}

export default Input;
