import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string; 
  $stretch?: boolean;
}

const Button: React.FC<ButtonProps> = ({text, $stretch}) => {
  return (
    <S.Button type="button" $stretch={$stretch}>{text}</S.Button>
  );
};

const S = {
    Button: styled.button<{ $stretch?: boolean}>`
        width: ${(props) => (props.$stretch ? '100%' : 'auto')};
        margin: 0;
        padding: 0.5em;
        border-radius: 5px;
        border: none;
        background: #3796ee;
        font: inherit;
        color: #e4ffff;
        cursor: pointer;
        outline: none;
    `
}

export default Button;
