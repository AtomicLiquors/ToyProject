import { Palette } from "@/styles/palette";
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string; 
  theme?: ButtonThemeOption;
  stretch?: boolean;
  minWidth?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export enum ButtonThemeOption { BLUE = 'blue', WHITE = 'white' };

interface OptionRequirement {
  background: string;
  color: string;
  border: string;
}

type OptionRequirements = {
  [key in ButtonThemeOption]: OptionRequirement; 
}

const $themes: OptionRequirements = {
  blue : {
    background: Palette.BLUE,
    color: Palette.TEXT_IN_BLUE,
    border: 'none',
  },
  white: {
    background: Palette.WHITE,
    color: 'black',
    border: '1px solid #ccc',
  }
}



const Button: React.FC<ButtonProps> = ({text, stretch, minWidth, theme = ButtonThemeOption.BLUE, onClick}) => {
  return (
    <S.Button onClick={onClick} type="button" $stretch={stretch} $theme={theme} $minWidth={minWidth}>{text}</S.Button>
  );
};

const S = {
    Button: styled.button<{ $theme: ButtonThemeOption, $stretch?: boolean, $minWidth?: number}>`
        width: ${(props) => (props.$stretch ? '100%' : 'auto')};
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
