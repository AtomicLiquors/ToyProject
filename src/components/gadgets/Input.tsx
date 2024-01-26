import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder?: string;
  label?: string;
  heightInVh?: number;
  stretch?: boolean;
}

interface InputStyleProps {
  $stretch?: boolean;
  $height?: number;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  stretch,
  label,
  heightInVh,
}) => {
  return (
    <S.InputContainer $stretch={stretch} $height={heightInVh}>
      {heightInVh ? (
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
    ${(props) => (props.$height ? "min-height:" + props.$height + "vh" : "")};
  `,

  TextArea: styled.textarea<InputStyleProps>`
    width: 100%;
    ${(props) => (props.$height ? "height: 100%" : "")};
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

  Input: styled.input`
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

export default Input;
