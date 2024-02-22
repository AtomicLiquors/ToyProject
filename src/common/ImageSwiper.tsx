import styled from "styled-components";

interface ImageSwiperProps {
  previewImages: string[];
}
const ImageSwiper: React.FC<ImageSwiperProps> = ({ previewImages }) => {
  return (
    <S.Container>
      {previewImages.map((image, index) => (
        <img key={index} src={image} />
      ))}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
  `,
};
export default ImageSwiper;
