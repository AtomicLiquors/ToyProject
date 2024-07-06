import { Palette } from "@/styles/palette";
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string; 
  theme?: ButtonThemeOption;
  stretch?: boolean;
  widthRatio?: number;
  minWidth?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ButtonOptionRequirement {
  background: string;
  color: string;
  border: string;
}

type ButtonOptionRequirements = {
  [key in ButtonThemeOption]: ButtonOptionRequirement; 
}

export enum ButtonThemeOption { BLUE = 'blue', WHITE = 'white', GRAY = 'gray' };

const $themes: ButtonOptionRequirements = {
  blue : {
    background: Palette.BLUE,
    color: Palette.TEXT_IN_BLUE,
    border: 'none',
  },
  white: {
    background: Palette.WHITE,
    color: 'black',
    border: '1px solid #ccc',
  },
  gray: {
    background: Palette.GRAY,
    color: 'black',
    border: '1px solid #ccc',
  }
}

const Button: React.FC<ButtonProps> = ({text, stretch, widthRatio, minWidth, theme = ButtonThemeOption.BLUE, onClick}) => {
  return (
    <S.Button onClick={onClick} type="button" $stretch={stretch} $widthRatio={widthRatio} $theme={theme} $minWidth={minWidth}>{text}</S.Button>
  );
};

const S = {
    Button: styled.button<{ $theme: ButtonThemeOption, $stretch?: boolean, $widthRatio?: number, $minWidth?: number}>`
        width: ${(props) => (props.$stretch ? '100%' : 'auto')};
        width: ${(props) => (props.$widthRatio ? props.$widthRatio + '%' : 'auto')};
        min-width: ${(props) => (props.$minWidth)}px;
        margin: 0;
        padding: 0.5em;
        border-radius: 5px;
        border: ${(props) => ($themes[props.$theme].border)};
        background: ${(props) => ($themes[props.$theme].background)};
        color: ${(props) => ($themes[props.$theme].color)};
        cursor: pointer;
        outline: none;
    `
}

export default Button;
