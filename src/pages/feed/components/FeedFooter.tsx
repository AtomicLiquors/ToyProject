import { Flex } from "@/styles/container";
import { outlinedIcons } from "@/styles/icons";
import styled from "styled-components";
import { Palette } from "@/styles/palette";
import { useState } from "react";

const $borderColor = Palette.GRAY;


const FeedFooter: React.FC<{ username: string, content: string }> = ({ username, content }) => {
  
  const [showDetail, setShowDetail] = useState(false);

  return (
    <S.Container>
      <S.FooterIconContainer $spaceAround $alignCenter>
        <img src={outlinedIcons.comments} width={24} />
        <div></div>
        <div></div>
      </S.FooterIconContainer>
      <div style={{textAlign: "left"}}>
        <div><b>{username}</b> &nbsp; 
        { showDetail ? <><span>{content}</span>&nbsp;<button onClick={() => setShowDetail(false)}>접기</button></> : <><span>{content.slice(0, 100)}</span>&nbsp;<button onClick={() => setShowDetail(true)}>더보기</button></> }
        </div>
      </div>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    border-bottom: 1px solid ${$borderColor};
    box-sizing: border-box;
    padding: 1rem;
  `,

  FooterIconContainer: styled(Flex)`
    padding-bottom: 1rem;
  `
};
export default FeedFooter;
