import LabeledInput from "@/common/gadgets/LabeledInput";
import { Flex } from "@/styles/container";
import styled from "styled-components";
import Button from "@/common/gadgets/Button";
import Label from "@/common/gadgets/Label";
import TagInput from "@/common/gadgets/TagInput";
import { post } from "@/api/post";
import { useRef, useState, useEffect } from "react";
import ErrorMsg from "@/common/gadgets/ErrorMsg";
import ImageSwiper from "@/common/ImageSwiper";
import EmptyImageTile from "@/common/EmptyImageTile";

const sw = navigator.serviceWorker;

const NewPost = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [postResponse, setPostResponse] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (sw) {
      sw.addEventListener("message", (event) => {
        if (event.source && event.data) {
          setIsFetching(false);
          console.log(event.data);
          //To-Do : status 변환해서 적절한 반응으로 바꾸기(페이지 이동, 에러 블록 표시(사용자 측 / 서버 측))
          setPostResponse(event.data);
        }
      });
    }
  }, []);

  const handleUploadTileClick = () => {
    imageRef.current?.click();
  };

  const handleRevertUploadClick = () => {
    // To-Do: Blob file들 release할 수 있나?
    setPreviewImages([]);
  }

  const handlePostClick = async () => {
    setIsFetching(true);
    const files = imageRef.current?.files;
    const content = contentRef.current?.value;
    await post(content!, files!);
    //console.log("NewPost Report : ");
    //console.log(result);
    //  setPostError(null);
  };

  const handleImageChange = () => {
    const files: FileList = imageRef.current?.files || new FileList();
    const urls: string[] = [];
    for (const file of files) {
      const blob = new Blob([file], { type: file.type });
      const url = URL.createObjectURL(blob);
      urls.push(url);
    }
    setPreviewImages([...urls]);
  };

  return (
    <S.Container $center>
      <S.Form $center $column>
        <input
          id="images"
          style={{ display: "none" }}
          type="file"
          multiple
          ref={imageRef}
          onChange={handleImageChange}
        />
        <S.ImageUplaodPanel>
          {previewImages[0] ? (
            <ImageSwiper previewImages={previewImages}/>
          ) : (
            <EmptyImageTile onClick={handleUploadTileClick}/>
          )}
        </S.ImageUplaodPanel>

        <LabeledInput
          id="content"
          ref={contentRef}
          label={"내용"}
          stretch
          textarea
          height={2}
          placeholder={"사진에 대한 설명을 추가해 주세요."}
        />
        <Flex $column $alignStart style={{ width: "100%", gap: "0.4rem" }}>
          <Label text={"태그"} />
          <TagInput />
        </Flex>
        {isFetching ? <>등록 중...</> : <></>}
        {postResponse ? (
          <ErrorMsg text={postResponse + " : 요청 중 에러가 발생했습니다."} />
        ) : (
          <></>
        )}
        <Button stretch text="등록" onClick={handlePostClick} />
      </S.Form>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
  `,

  ImageUplaodPanel: styled.div`
    width: 100%;
    height: 256px;
  `,

  EmptyImage: styled.img`
    width: 50%;
    opacity: 0.3;
  `,

  EmptyImageTile: styled(Flex)`
    height: 100%;
    border-radius: 1rem;
    border: 3px dashed #ccc;
  `,

  Form: styled(Flex)`
    max-width: 256px;
    height: 100%;
    width: 100%;
    gap: 3rem;
  `,
};
export default NewPost;
