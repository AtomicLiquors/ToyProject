import styled from "styled-components";
import { outlinedIcons } from "@/styles/icons";
import { Link } from "react-router-dom";
import Paths from "@/util/consts/Paths";
import { navbarRemHeight } from "@/util/consts/LayoutMeasurements";
import { Flex } from "@/styles/container";

const Navbar: React.FC = () => {
  return (
    <S.Container $spaceAround style={{ height: `${navbarRemHeight}rem` }}>
      <div></div>
      <Link to={Paths.FEED}>
        <img src={outlinedIcons.home} width={32} />
      </Link>
      <Link to={Paths.SEARCH}>
        <img src={outlinedIcons.search} width={32} />
      </Link>
      <Link to={Paths.NEWPOST}>
        <img src={outlinedIcons.add} width={32} />
      </Link>
      <Link to={Paths.NOTIFICATIONS}>
        <img src={outlinedIcons.home} width={32} />
      </Link>
      <Link to={Paths.PROFILE}>
        <img src={outlinedIcons.user} width={32} />
      </Link>
      <div></div>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    position: absolute;
    background: white;
    z-index: 1;
    bottom: 0;
    width: 100%;
    
  `,
};

export default Navbar;
