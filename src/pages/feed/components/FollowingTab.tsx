import ProfileImg from "@/common/ProfileImg";
import SwipeTab from "@/common/gadgets/SwipeTab";
import { Flex } from "@/styles/container";
import styled from "styled-components";

import { marginTop as $marginTop } from "@/common/layout/Header";

const FollowingTab = () => {
  return (
    <S.Container>
      <SwipeTab>
        <S.Profiles $alignCenter>
          <ProfileImg width={32} />
          <ProfileImg width={32} />
          <ProfileImg width={32} />
          <ProfileImg width={32} />
          <ProfileImg width={32} />
          <ProfileImg width={32} />
          <ProfileImg width={32} />
          <ProfileImg width={32} />
          <ProfileImg width={32} />
          <ProfileImg width={32} />
          <ProfileImg width={32} height={32}/>
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
    padding: 5px 32px 5px 32px;
    gap: 16px;
    min-height: ${$marginTop}rem;
  `,
};
export default FollowingTab;
