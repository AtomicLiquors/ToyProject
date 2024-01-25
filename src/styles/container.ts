import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface FlexProps {
  $center?: boolean;
  $column?: boolean;
  $spaceBetween?: boolean;
  $spaceAround?: boolean;
  $flxEnd?: boolean;
  $gap?: string;
  children: ReactNode;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ $center }) =>
    $center &&
    css`
      justify-content: center;
      align-items: center;
      text-align: center;
    `}
  ${({ $column }) =>
    $column &&
    css`
      flex-direction: column;
    `}
  ${({ $spaceBetween }) =>
    $spaceBetween &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
    ${({ $spaceAround }) =>
    $spaceAround &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
    ${({ $flxEnd }) =>
    $flxEnd &&
    css`
      justify-content: flex-end;
      align-items: center;
    `}
    ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap};
    `}
`;
