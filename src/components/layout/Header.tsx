import { ReactNode } from "react";
import { Flex } from "@/styles/container";
import { Link } from "react-router-dom";
import { Palette } from "@/styles/palette";

interface HeaderProps {
  backlink?: string;
  children?: ReactNode;
}

export const marginTop = 32;

const Header: React.FC<HeaderProps> = ({ backlink='/' }) => {
  return (
    <Flex $flxStart style={{position: 'absolute', top:0, height: marginTop, width: '100%', borderBottom: `1px solid ${Palette.GRAY}`}}>
      {backlink ? <Link to={backlink}>Back</Link> : <></>}
    </Flex>
  );
};

export default Header;
