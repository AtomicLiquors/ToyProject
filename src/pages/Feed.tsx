import styled from "styled-components";
import { Flex } from "@/styles/container";
import { Link } from "react-router-dom";

const feedItems = [
  {
    feedId: 0,
    username: "joshua_i",
    imgURL:
      "https://images.pexels.com/photos/18844139/pexels-photo-18844139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Feed: React.FC = () => {
  return (
    <S.Container $center $column>
      <Link to={"/"}>ㅗㅗㅗ</Link>
      {feedItems ? (
        feedItems.map((feed, feedId) => (
          <div key={feedId} style={{ width: "100%" }}>
            <div>{feed.username}</div>
            <img src={feed.imgURL} width={100} />
            <div>iconbar here</div>
          </div>
        ))
      ) : (
        <div>피드에 표시할 항목이 없습니다.</div>
      )}
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
  height: 100%;
  background: white;
    width: 100%;
    position: absolute;
  `,
};

export default Feed;
