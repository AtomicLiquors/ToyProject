import { Flex } from "@/styles/container";
import styled from "styled-components";

interface GalleryProps {
  posts: PostType[];
  emptyMsg: string;
}

const Gallery: React.FC<GalleryProps> = ({ posts, emptyMsg }) => {
  return (
    <>
      {posts[0] ? (
        <S.GalleryGrid>
          {posts.map((post, key) => (
            <S.GridItem
              key={key}
              src={import.meta.env.VITE_S3_PATH + post.images[0].imagePath}
              draggable="false"
            />
          ))}
        </S.GalleryGrid>
      ) : (
        <S.EmptyResult $center>
          <div>{emptyMsg}</div>
        </S.EmptyResult>
      )}
    </>
  );
};

const S = {
  GalleryGrid: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  `,
  GridItem: styled.img`
    width: 100%;
  `,
  EmptyResult: styled(Flex)`
    width: 100%;
    height: 100%;
  `,
};
export default Gallery;
