import { Flex } from "@/styles/container";
import styled from "styled-components";

interface ImageSwiperProps {
  previewImages: string[];
  deleteClick: (index: number) => void;
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({ previewImages, deleteClick }) => {
  return (
    <S.RelativePositioner>
      <S.SwipableContainer>
        <S.PreviewImagesFlex>
          {previewImages.map((url, index) => (
            <S.PreviewImage key={index} $imgUrl={url}>
              <div onClick={() => deleteClick(index)}>X</div>
            </S.PreviewImage>
          ))}
        </S.PreviewImagesFlex>
      </S.SwipableContainer>
      <S.Dots $center>
        {previewImages.map((index) => (
          <S.Dot key={index} />
        ))}
      </S.Dots>
    </S.RelativePositioner>
  );
};

const S = {
  RelativePositioner: styled.div`
    width: 100%;
    height: 100%;
    position: relative;
  `,

  SwipableContainer: styled.div`
    width: 100%;
    height: 100%;
    overflow-x: scroll;
  `,

  Dots: styled(Flex)`
    width: 100%;
    position: absolute;
    bottom: 1rem;
    gap: 0.1rem;
  `,

  Dot: styled.div`
    width: 0.2rem;
    height: 0.2rem;
    border: 2px solid #ccc;
    border-radius: 1rem;
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
