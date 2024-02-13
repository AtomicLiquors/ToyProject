import { forwardRef, RefObject} from "react";
import styled from "styled-components";
import { clearDefault } from "@/styles/clear-default";
import Label from "@/common/gadgets/Label";

type HTMLInputTextAreaElement = HTMLInputElement | HTMLTextAreaElement;

interface InputProps {
  placeholder?: string;
  label?: string;
  textarea?: boolean;
  stretch?: boolean;
  height?: number;
  rounded?: boolean;
}

interface InputStyleProps {
  $stretch?: boolean;
  $height?: number;
  $textarea?: boolean;
  $rounded?: boolean;
}

const LabeledInput = forwardRef<HTMLInputTextAreaElement, InputProps>(({
  placeholder,
  stretch,
  label,
  height,
  textarea,
  rounded
}, ref) => {
  return (
    <S.InputContainer $stretch={stretch} $height={height} $textarea={textarea} $rounded={rounded}>
      {textarea ? (
        <div style={{height: "100%"}}>
          {label && <Label text={label}/>}
          <S.TextArea $textarea={textarea} ref={ref as RefObject<HTMLTextAreaElement>} placeholder={placeholder} />
        </div>
      ) : (
        <S.GridLayout>          
          {label && <Label text={label}/>}
          <S.Input ref={ref as RefObject<HTMLInputElement>} placeholder={placeholder} />
        </S.GridLayout>
      )}
    </S.InputContainer>
  );
});

const S = {
  GridLayout: styled.div`
    display: grid;
    grid-template-columns: 25% 75%; 
    align-items: center;
  `,
  InputContainer: styled.div<InputStyleProps>`
    width: ${(props) => (props.$stretch ? "100%" : "auto")};
    ${(props) => (props.$textarea ? "min-height:" + props.$height + "rem" : "")};
    height: ${(props) => (props.$height ? props.$height + "rem" : "auto")};
  `,

  TextArea: styled.textarea<InputStyleProps>`
    width: 100%;
    ${(props) => (props.$textarea ? "height: 100%" : "")};
    border-radius: 5px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 1px solid #ccc;
    padding: 5px 10px 5px 10px;
    ${clearDefault.input}
  `,

  Input: styled.input<InputStyleProps>`
    ${(props) => (props.$rounded ? "border-radius: 100%" : "")};
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 5px 5px 5px 5px;
    ${clearDefault.input}
    border-bottom: 1px solid #ccc;
  `,
};

export default LabeledInput;
