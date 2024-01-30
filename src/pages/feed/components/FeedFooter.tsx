import { Flex } from "@/styles/container";
import { outlinedIcons } from "@/styles/icons";
import styled from "styled-components";
import { Palette } from "@/styles/palette";

const $borderColor = Palette.GRAY;

const FeedFooter = () => {
  return (
    <S.Container $spaceAround $alignCenter>
      <img src={outlinedIcons.comments} width={24} />
      <div></div>
      <div></div>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    border-bottom: 1px solid ${$borderColor};
    box-sizing: border-box;
    padding: 1rem 2rem 1rem 2rem;
  `,
};
export default FeedFooter;
