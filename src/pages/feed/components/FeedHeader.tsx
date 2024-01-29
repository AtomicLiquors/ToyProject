import ProfileImg from "@/common/ProfileImg";
import { Flex } from "@/styles/container";
import styled from "styled-components";

const FeedHeader: React.FC<{ username: string }> = ({ username }) => {
  return (
    <S.Container $alignCenter>
      <ProfileImg width={32} />
      {username}
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    gap: 1rem;
  `,
};
export default FeedHeader;
