import { ReactNode } from "react";
import { Flex } from "@/styles/container";
import { Link } from "react-router-dom";
import { Palette } from "@/styles/palette";
import {outlinedIcons} from '@/styles/icons'

interface HeaderProps {
  backlink?: string;
  children?: ReactNode;
}

export const marginTop = 3;

const Header: React.FC<HeaderProps> = ({ backlink='/' }) => {
  return (
    <Flex $flxStart style={{position: 'absolute', top:0, height: `${marginTop}rem`, width: '100%', borderBottom: `1px solid ${Palette.GRAY}`}}>
      {backlink ? <Link to={backlink}><img src={outlinedIcons.back} width={24}/></Link> : <></>}
    </Flex>
  );
};

export default Header;
