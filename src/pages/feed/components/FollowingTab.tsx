
import SwipeTab from "@/common/gadgets/SwipeTab";
import { Flex } from "@/styles/container";
import styled from "styled-components";

import { marginTop as $marginTop } from "@/common/layout/PageHeader";
import FollowingTabItem from "./FollowingTabItem";


const FollowingTab = () => {
  return (
    <S.Container>
      <SwipeTab>
        <S.Profiles $alignCenter>
          <FollowingTabItem size={3.2} username={'chl_vic'}/>
          <FollowingTabItem size={3.2} username={'_shawsanna'}/>
          <FollowingTabItem size={3.2} username={'24kooong4'}/>
          <FollowingTabItem size={3.2} username={'2kooong5'}/>
          <FollowingTabItem size={3.2} username={'2kooong6'}/>
          <FollowingTabItem size={3.2} username={'2kooong2'}/>
          <FollowingTabItem size={3.2} username={'2kooong2'}/>
          <FollowingTabItem size={3.2} username={'2kooong2'}/>
          <FollowingTabItem size={3.2} username={'2kooong2'}/>
          <FollowingTabItem size={3.2} username={'2kooong2'}/>
          <FollowingTabItem size={3.2} username={'2kooong2'}/>
          <FollowingTabItem size={3.2} username={'2kooong2'}/>
          <FollowingTabItem size={3.2} username={'2kooong2'}/>
        </S.Profiles>
      </SwipeTab>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-top: ${$marginTop}rem;
  `,

  Profiles: styled(Flex)`
    width: auto;
    padding: 1rem 2rem 1rem 2rem;
    gap: 1.6rem;
    min-height: ${$marginTop}rem;
  `,
};
export default FollowingTab;
