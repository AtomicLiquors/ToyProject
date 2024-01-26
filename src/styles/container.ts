import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface FlexProps {
  $center?: boolean;
  $column?: boolean;
  $spaceBetween?: boolean;
  $spaceAround?: boolean;
  $alignStart?: boolean;
  $alignCenter?: boolean;
  $flxStart?: boolean;
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
    ${({ $flxStart }) =>
    $flxStart &&
    css`
      justify-content: flex-start;
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
    ${({ $alignStart }) =>
    $alignStart &&
    css`
      justify-content: center;
      align-items: start;
      text-align: left;
    `}

    ${({ $alignCenter }) =>
    $alignCenter &&
    css`
      align-items: center;
    `}
`;
