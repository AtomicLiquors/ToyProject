import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder?: string;
  label?: string;
  textAreaHeight?: number;
  stretch?: boolean;
  height?: number;
  rounded?: boolean;
}

interface InputStyleProps {
  $stretch?: boolean;
  $textAreaHeight?: number;
  $height?: number;
  $rounded?: boolean;
}

const LabledInput: React.FC<InputProps> = ({
  placeholder,
  stretch,
  label,
  height,
  textAreaHeight,
  rounded
}) => {
  return (
    <S.InputContainer $stretch={stretch} $height={height} $textAreaHeight={textAreaHeight} $rounded={rounded}>
      {textAreaHeight ? (
        <>
          {label ? <S.InputLabel>{label}</S.InputLabel> : <></>}
          <S.TextArea placeholder={placeholder} />
        </>
      ) : (
        <S.GridLayout>          
          {label ? <S.InputLabel>{label}</S.InputLabel> : <></>}
          <S.Input placeholder={placeholder} />
        </S.GridLayout>
      )}
    </S.InputContainer>
  );
};

const S = {
  GridLayout: styled.div`
    display: grid;
    grid-template-columns: 25% 75%; 
    align-items: center;
  `,

  InputLabel: styled.div`
    font-weight: bold;
    width: 100%;
    text-align: left;
  `,
  InputContainer: styled.div<InputStyleProps>`
    width: ${(props) => (props.$stretch ? "100%" : "auto")};
    ${(props) => (props.$textAreaHeight ? "min-height:" + props.$textAreaHeight + "rem" : "")};
    height: ${(props) => (props.$height ? props.$height + "rem" : "auto")};
  `,

  TextArea: styled.textarea<InputStyleProps>`
    width: 100%;
    ${(props) => (props.$textAreaHeight ? "height: 100%" : "")};
    border-radius: 5px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 1px solid #ccc;
    padding: 5px 10px 5px 10px;
    margin: 0; /* Remove default margin */
    box-sizing: border-box; /* Ensure padding and border are included in the total width/height */
    outline: none; /* Remove default outline */
    background-color: transparent; /* Remove default background color */
    color: inherit; /* Inherit text color */
    font-family: inherit; /* Inherit font family */
    font-size: inherit; /* Inherit font size */
  `,

  Input: styled.input<InputStyleProps>`
    ${(props) => (props.$rounded ? "border-radius: 100%" : "")};
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 5px 5px 5px 5px;
    margin: 0; /* Remove default margin */
    box-sizing: border-box; /* Ensure padding and border are included in the total width/height */
    outline: none; /* Remove default outline */
    background-color: transparent; /* Remove default background color */
    color: inherit; /* Inherit text color */
    font-family: inherit; /* Inherit font family */
    font-size: inherit; /* Inherit font size */
  `,
};

export default LabledInput;
