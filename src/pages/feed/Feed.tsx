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
    content: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },

  {
    feedId: 1,
    username: "joshua_i",
    imgURL:
    "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
    "이 헌법중 공무원의 임기 또는 중임제한에 관한 규정은 이 헌법에 의하여 그 공무원이 최초로 선출 또는 임명된 때로부터 적용한다. 위원은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 재판의 심리와 판결은 공개한다. 다만, 심리는 국가의 안전보장 또는 안녕질서를 방해하거나 선량한 풍속을 해할 염려가 있을 때에는 법원의 결정으로 공개하지 아니할 수 있다.",

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
