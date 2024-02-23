import { Flex } from "@/styles/container";
import styled from "styled-components";

interface ImageSwiperProps {
  previewImages: string[];
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({ previewImages }) => {
  return (
    <S.SwipableContainer>
      <S.PreviewImagesFlex>
        {previewImages.map((url, index) => (
          <S.PreviewImage key={index} $imgUrl={url}>
            {/*<div>X</div>*/}
          </S.PreviewImage>
        ))}
      </S.PreviewImagesFlex>
    </S.SwipableContainer>
  );
};

const S = {
  SwipableContainer: styled.div`
    width: 100%;
    height: 100%;
    overflow-x: scroll;
  `,

  PreviewImagesFlex: styled(Flex)`
    width: auto;
    height: 100%;
    gap: 0.5rem;
  `,

  PreviewImage: styled.div<{ $imgUrl: string }>`
    border-radius: 1rem;
    min-width: 254px;
    height: 99%;
    background-image: ${(props) => `url(${props.$imgUrl})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid #ccc;
  `,
};
export default ImageSwiper;
