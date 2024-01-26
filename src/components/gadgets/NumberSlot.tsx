import React from "react";
import styled from "styled-components";

interface NumberSlotProps {
  start: number;
  end: number;
  label?: string;
}

const NumberSlot: React.FC<NumberSlotProps> = () => {

  return (
    <S.SlotContainer >
     
    </S.SlotContainer>
  );
};

const S = {
    SlotContainer: styled.div`
      width: auto;
      height: 100px;
      box-sizing: border-box
    `,
}

export default NumberSlot;
