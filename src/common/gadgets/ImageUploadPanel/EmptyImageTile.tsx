import { Flex } from "@/styles/container";
import styled from "styled-components";
import { tiles } from "@/styles/images";
import { MouseEventHandler } from "react";

const EmptyImageTile: React.FC<{onClick: MouseEventHandler}> = ({onClick}) => {
  return (
    <S.EmptyImageTile $center $column onClick={onClick}>
      <S.EmptyImage src={tiles.photo} />
      <div>사진을 첨부해 주세요.</div>
    </S.EmptyImageTile>
  );
};

const S = {
  EmptyImage: styled.img`
    width: 50%;
    opacity: 0.3;
  `,

  EmptyImageTile: styled(Flex)`
    height: 100%;
    border-radius: 1rem;
    border: 3px dashed #ccc;
  `,
};
export default EmptyImageTile;
