import React from "react";
import styled from "styled-components";

const Button: React.FC = () => {
  return (
    <S.Button type="button">등록</S.Button>
  );
};

const S = {
    Button: styled.button`
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
