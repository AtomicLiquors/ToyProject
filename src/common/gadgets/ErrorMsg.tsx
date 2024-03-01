import { Palette } from "@/styles/palette";
import React from "react";
import styled from "styled-components";

interface ErrorMsgProps {
    text: string; 
    theme?: ErrorMsgThemeOption;
  }

  export enum ErrorMsgThemeOption { WARNING = 'warning', ERROR = 'error' };


const ErrorMsg: React.FC<ErrorMsgProps> = ({text, theme = ErrorMsgThemeOption.ERROR}) => {
    return (
      <S.ErrorMsg $theme={theme}>{text}</S.ErrorMsg>
    );
  };
  

const $themes = {
    warning : {
      background: Palette.YELLOW,
      color: Palette.TEXT_IN_BLUE,
      border: 'none',
    },
    error: {
      background: Palette.RED,
      color: 'black',
      border: '1px solid #ccc',
    }
  }

const S = {
    ErrorMsg: styled.div<{$theme: ErrorMsgThemeOption}>`
        width: 100%;
        text-align: center;
        margin: 0;
        padding: 0.5em;
        box-sizing: border-box;
        border-radius: 5px;
        border: ${(props) => ($themes[props.$theme].border)};
        background: ${(props) => ($themes[props.$theme].background)};
        color: ${(props) => ($themes[props.$theme].color)};
        cursor: pointer;
        outline: none;
    `
}

export default ErrorMsg;