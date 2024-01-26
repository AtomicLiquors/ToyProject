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
        border-radius: 5px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: 1px solid #ccc;
        padding: 5px 15px 5px 15px;
        margin: 0; /* Remove default margin */
        box-sizing: border-box; /* Ensure padding and border are included in the total width/height */
        outline: none; /* Remove default outline */
        background-color: transparent; /* Remove default background color */
        color: inherit; /* Inherit text color */
        font-family: inherit; /* Inherit font family */
        font-size: inherit; /* Inherit font size */
    `
}

export default Input;
