//import styled from "styled-components";
//import { Flex } from "@/styles/container";
import PageHeader from "@/common/layout/PageHeader";
import FollowingTab from "@/pages/feed/components/FollowingTab";
import FeedContainer, { feedItem } from "@/pages/feed/components/FeedContainer";
import Page from "@/common/layout/Page";

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
    <Page>
      <PageHeader />
      <div style={{ width: '100%', overflowY: "scroll" }}>
        <FollowingTab />
        <FeedContainer feedItems={feedItems} />
      </div>
    </Page>
  );
};

export default Feed;
