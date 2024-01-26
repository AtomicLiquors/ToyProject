import { ReactNode } from "react";
import { Flex } from "@/styles/container";
import { Link } from "react-router-dom";

interface HeaderProps {
  backlink?: string;
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ backlink='/' }) => {
  return (
    <Flex $flxStart style={{position: 'absolute', top:0}}>
      {backlink ? <Link to={backlink}>Back</Link> : <></>}
    </Flex>
  );
};

export default Header;
