import styled from "styled-components";
import { Flex } from "@/styles/container";
import Header from "@/common/layout/Header";
import FollowingTab from "@/pages/feed/components/FollowingTab";
import FeedContainer, { feedItem } from "@/pages/feed/components/FeedContainer";

const feedItems: feedItem[] = [
  {
    feedId: 0,
    username: "joshua_i",
    imgURL:
      "https://images.pexels.com/photos/18844139/pexels-photo-18844139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    feedId: 1,
    username: "joshua_i",
    imgURL:
      "https://images.pexels.com/photos/18844139/pexels-photo-18844139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Feed: React.FC = () => {
  return (
    <S.Container $center $column style={{overflow: 'hidden'}}>
      <Header/>
      <FollowingTab/>
      <FeedContainer feedItems={feedItems}/>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    box-sizing: border-box;
    height: 100%;
    background: white;
    width: 100%;
    position: absolute;
  `,

};

export default Feed;
