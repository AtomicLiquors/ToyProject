import LabeledInput from "@/common/gadgets/LabeledInput";
import { Flex } from "@/styles/container";
import styled from "styled-components";
import Button from "@/common/gadgets/Button";
import Label from "@/common/gadgets/Label";
import TagInput from "@/common/gadgets/TagInput";
import { post } from "@/api/post";
import { useRef, useState, useEffect } from "react";
import ErrorMsg from "@/common/gadgets/ErrorMsg";
import ImageUploadPanel from "@/common/gadgets/ImageUploadPanel/ImageUploadPanel";
import { isStatusCodeOk } from "@/util/helpers/checkStatusCodeOk";
import Page from "@/common/layout/Page";

const sw = navigator.serviceWorker;

const NewPost = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [postResponse, setPostResponse] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (sw) {
      sw.addEventListener("message", (event) => {
        if (event.source && event.data) {
          setIsFetching(false);
          if (isStatusCodeOk(event.data)) {
            setPostResponse("등록되었습니다.");
          } else {
            setPostResponse(event.data + " : 등록 중 에러가 발생했습니다.");
          }
        }
      });
    }
  }, []);

  const handlePostClick = async () => {
    setIsFetching(true);
    const files = imageRef.current?.files;
    const content = contentRef.current?.value;
    await post(content!, files!);
  };

  return (
    <Page $center>
      <S.Form $center $column>
        <ImageUploadPanel ref={imageRef} />

        <LabeledInput
          id="content"
          ref={contentRef}
          label={"내용"}
          stretch
          textarea
          height={2}
          placeholder={"사진에 대한 설명을 추가해 주세요."}
        />
        <S.FormItem $column $alignStart>
          <Label text={"태그"} />
          <TagInput />
        </S.FormItem>

        <S.FormItem $column>
          {isFetching ? <>등록 중...</> : <></>}
          {postResponse ? <ErrorMsg text={postResponse} /> : <></>}
          <Button stretch text="등록" onClick={handlePostClick} />
        </S.FormItem>
      </S.Form>
    </Page>
  );
};

const S = {

  ImageUploadPanel: styled.div`
    width: 100%;
    height: 256px;
  `,

  Form: styled(Flex)`
    box-sizing: border-box;
    max-width: 256px;
    height: 100%;
    width: 100%;
    gap: 3rem;
    overflow: scroll;
  `,
  
  FormItem: styled(Flex)`
    width: 100%;
    gap: 1.4rem;
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

};
export default NewPost;
