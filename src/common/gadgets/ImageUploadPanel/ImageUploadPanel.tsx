import styled from 'styled-components'
import ImageSwiper from "@/common/gadgets/ImageUploadPanel/ImageSwiper";
import EmptyImageTile from "@/common/gadgets/ImageUploadPanel/EmptyImageTile";
import { RefObject, forwardRef, useState } from 'react';



const ImageUploadPanel = forwardRef<HTMLInputElement, {}>(({}, ref) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const refObject = ref as RefObject<HTMLInputElement>;

  const handleImageChange = () => {
    const files: FileList = refObject.current?.files || new FileList();
    const urls: string[] = [];
    for (const file of files) {
      const blob = new Blob([file], { type: file.type });
      const url = URL.createObjectURL(blob);
      urls.push(url);
    }
    setPreviewImages([...urls]);
  };

  const handleUploadTileClick = () => {
    console.log(refObject.current);
    refObject.current?.click();
  };
/*
  const handleRevertUploadClick = () => {
    // To-Do: Blob file들 release할 수 있나?
    setPreviewImages([]);
  };*/


  return (
    <S.ImageUploadPanel>
          <input
            id="images"
            style={{ display: "none" }}
            type="file"
            multiple
            ref={ref}
            onChange={handleImageChange}
          />
          {previewImages[0] ? (
            <ImageSwiper previewImages={previewImages} />
          ) : (
            <EmptyImageTile onClick={handleUploadTileClick} />
          )}
        </S.ImageUploadPanel>
  )
});

const S = {
  ImageUploadPanel: styled.div`
    width: 100%;
    height: 256px;
  `,

}
export default ImageUploadPanel
