import ProfileImg from "@/common/ProfileImg";
import { Flex } from "@/styles/container";
import styled from "styled-components";

const FeedHeader: React.FC<{ username: string }> = ({ username }) => {
  return (
    <S.Container $alignCenter>
      <ProfileImg size={2.4} username={username}/>
      <b>{username}</b>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    padding: 0 0 1rem 1rem;
    gap: 0.8rem;
    color: #444;
  `,
};
export default FeedHeader;
