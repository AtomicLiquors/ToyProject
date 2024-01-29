import { Flex } from "@/styles/container";
import { outlinedIcons } from "@/styles/icons";
import styled from "styled-components";

const FeedFooter = () => {
  return (
    <S.Container $spaceAround $alignCenter>
      <img src={outlinedIcons.comments} width={24} />
      <div>fff</div>
      <div>icon</div>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    padding: 0 1rem 0 1rem;
  `,
};
export default FeedFooter;
