import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string; 
  $stretch?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({text, $stretch, onClick}) => {
  return (
    <S.Button onClick={onClick} type="button" $stretch={$stretch}>{text}</S.Button>
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
