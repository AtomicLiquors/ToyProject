import styled from 'styled-components'
import { Flex } from "@/styles/container";
import { navbarRemHeight } from "@/styles/layout-measurements";

import React from 'react';

interface PageProps {
   $center?: boolean;
   children: React.ReactNode;
}

const Page:React.FC<PageProps> = ({$center=false, children}) => {
  return (
    <S.Container $spacing={navbarRemHeight} $center={$center} $column>
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
    overflow-y: scroll;
  `,
}
export default Page
