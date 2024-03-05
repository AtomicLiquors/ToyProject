import styled from "styled-components";
import { outlinedIcons } from "@/styles/images";
import { Link, useNavigate } from "react-router-dom";
import Paths from "@/util/consts/Paths";
import { navbarRemHeight } from "@/styles/layout-measurements";
import { Flex } from "@/styles/container";
import ProfileImg from "@/common/ProfileImg";

const $itemSize = 2;

const Navbar: React.FC = () => {

  const navigate = useNavigate();

  // const navigateToMyProfile = () => navigate(Paths.PROFILE, {state: {mine: true}});
  const navigateToMyProfile = () => navigate(Paths.PROFILE, {state: {mine: false, id: 1}});

  return (
    <S.Container $alignCenter $spaceAround style={{ height: `${navbarRemHeight}rem` }}>
      <div></div>
      <Link to={Paths.FEED}>
        <S.Icon src={outlinedIcons.home} />
      </Link>
      <Link to={Paths.SEARCH}>
        <S.Icon src={outlinedIcons.search} />
      </Link>
      <Link to={Paths.NEWPOST}>
        <S.Icon src={outlinedIcons.add} />
      </Link>
      <Link to={Paths.NOTIFICATIONS}>
        <S.Icon src={outlinedIcons.bell} />
      </Link>
      <div onClick={navigateToMyProfile} style={{cursor: 'pointer'}}>
        <ProfileImg size={$itemSize} username={'2kooong2'}/>
      </div>
      
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
  Icon: styled.img`
    margin-top: 0.3rem;
    width: ${$itemSize}rem;
  `,
};

export default Navbar;
