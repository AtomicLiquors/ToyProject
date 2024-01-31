import { ReactNode } from "react";
import { Flex } from "@/styles/container";
import { Link } from "react-router-dom";
import { Palette } from "@/styles/palette";
import {outlinedIcons} from '@/styles/icons'
import styled from "styled-components";
import { pageHeaderMargin } from "@/styles/layout-measurements";

interface HeaderProps {
  backlink?: string;
  children?: ReactNode;
}

export const marginTop = 3;

const PageHeader: React.FC<HeaderProps> = ({ backlink='/' }) => {
  return (
    <S.Container $flxStart $marginTop={pageHeaderMargin} $borderColor={Palette.GRAY}>
      {backlink ? <Link to={backlink}><img src={outlinedIcons.back} width={24}/></Link> : <></>}
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)<{$marginTop: number, $borderColor: string}>`
    position: absolute;
    top:0;
    height: ${(props) => props.$marginTop}rem;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.$borderColor};
    background: white;
  `
}

export default PageHeader;
