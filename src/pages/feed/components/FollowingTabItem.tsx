import styled from "styled-components";
import ProfileImg from "@/common/ProfileImg";
import { Flex } from "@/styles/container";

const FollowingTabItem: React.FC<{ size: number; username: string }> = ({
  size,
  username,
}) => {
  return (
    <S.Container $column $center>
      <ProfileImg size={size} username={username} />
      <S.NameTag>{username}</S.NameTag>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)``,

  NameTag: styled.div`
    font-size: 0.8rem;
  `
};
export default FollowingTabItem;
