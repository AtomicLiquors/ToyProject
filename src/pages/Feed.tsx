//import styled from "styled-components";

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
    <>
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
    </>
  );
};

export default Feed;
