import styled from "styled-components";
import { Palette } from "@/styles/palette";
import { useState } from "react";

const Keyword: React.FC<{ text: string }> = ({ text }) => {
  const [selected, setSelected] = useState(false);

  const handleKeywordClick = () => {
    setSelected(!selected);
  };

  return (
    <>
      {selected ? (
        <S.Div
          onClick={() => handleKeywordClick()}
          $color={Palette.WHITE}
          $borderColor={Palette.GRAY}
          style={{ backgroundColor: Palette.GRAY }}
        >
          {text}
        </S.Div>
      ) : (
        <S.Div
          onClick={() => handleKeywordClick()}
          $color={Palette.TEXT_IN_GRAY_OUTLINE}
          $borderColor={Palette.GRAY}
        >
          {text}
        </S.Div>
      )}
    </>
  );
};

const S = {
  Div: styled.div<{ $color: string; $borderColor: string }>`
    cursor: pointer;
    color: ${(props) => props.$color};
    border-radius: 4rem;
    padding: 0.3rem 0.5rem;
    border: 1px solid ${(props) => props.$borderColor};
  `,
};
export default Keyword;
