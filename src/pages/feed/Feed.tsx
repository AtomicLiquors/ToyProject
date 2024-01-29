import styled from "styled-components";
import { Flex } from "@/styles/container";
import ProfileImg from "@/components/ProfileImg";
import Header, { marginTop } from "@/components/layout/Header";

const feedItems = [
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
      <Flex style={{ padding: '5px', overflow: "scroll", gap: "25px", minHeight: "32px", marginTop: marginTop }}>
        <ProfileImg width={32} />
        <ProfileImg width={32} />
        <ProfileImg width={32} />
        <ProfileImg width={32} />
        <ProfileImg width={32} />
        <ProfileImg width={32} />
        <ProfileImg width={32} />
      </Flex>
      <S.FeedContainer style={{overflow: 'scroll'}}>
        {feedItems ? (
          feedItems.map((feed, feedId) => (
            <div key={feedId} style={{ width: "100%" }}>
              <Flex $alignCenter>
                <ProfileImg width={32} />
                {feed.username}
              </Flex>
              <img src={feed.imgURL} width={"100%"} />

              <Flex $spaceAround $alignCenter>
                <div>comment</div>
                <div>3 dots</div>
                <div>icon</div>
              </Flex>
            </div>
          ))
        ) : (
          <div>피드에 표시할 항목이 없습니다.</div>
        )}
      </S.FeedContainer>
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

  FeedContainer: styled.div`
  `,
};

export default Feed;
