import styled from "styled-components";
import ImageSwiper from "@/common/gadgets/ImageUploadPanel/ImageSwiper";
import EmptyImageTile from "@/common/gadgets/ImageUploadPanel/EmptyImageTile";
import { RefObject, forwardRef, useState } from "react";

const ImageUploadPanel = forwardRef<HTMLInputElement, {}>(({}, ref) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const refObject = ref as RefObject<HTMLInputElement>;

  const handleImageChange = () => {
    const files: FileList = refObject.current?.files || new FileList();
    const urls: string[] = [];
    // To-Do: Blob file들 캐싱.
    for (const file of files) {
      const blob = new Blob([file], { type: file.type });
      const url = URL.createObjectURL(blob);
      urls.push(url);
    }
    setPreviewImages([...urls]);
  };

  const handleUploadTileClick = () => {
    refObject.current?.click();
  };
  // To-Do: 현재 첨부한 사진에 추가로 첨부하기.

  const removeFile = (index: number) => {
    if (index < 0) return;
    // To-Do: Blob file들 release할 수 있나?
    const dt = new DataTransfer();
    const fileInput = refObject.current;
    const files: FileList = fileInput?.files || new FileList();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (index !== i) dt.items.add(file); 
    }

    if(fileInput){
      fileInput.files = dt.files; 
    }
    handleImageChange();
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
        <ImageSwiper previewImages={previewImages} deleteClick={removeFile} />
      ) : (
        <EmptyImageTile onClick={handleUploadTileClick} />
      )}
    </S.ImageUploadPanel>
  );
});

const S = {
  ImageUploadPanel: styled.div`
    width: 100%;
    height: 256px;
  `,
};
export default ImageUploadPanel;
