import styled from 'styled-components'
import { Flex } from "@/styles/container";
import { navbarRemHeight } from "@/util/consts/LayoutMeasurements";

import React from 'react';

const Page:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <S.Container $spacing={navbarRemHeight} $column $center>
      {children}
    </S.Container>
  )
}

const S = {
  Container: styled(Flex)<{$spacing: number}>`
    box-sizing: border-box;
    width: 100%;
    background: white;
    height: calc(100% - ${(props) => props.$spacing}rem);
    position: absolute;
  `,

}
export default Page
