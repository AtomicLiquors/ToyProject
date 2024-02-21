import LabeledInput from "@/common/gadgets/LabeledInput";
import { Flex } from "@/styles/container";
import styled from "styled-components";
import { tiles } from "@/styles/images";
import Button from "@/common/gadgets/Button";
import Label from "@/common/gadgets/Label";
import TagInput from "@/common/gadgets/TagInput";
import { post } from "@/api/post";
import { useRef, useState, useEffect } from "react";
import ErrorMsg from "@/common/gadgets/ErrorMsg";

const sw = navigator.serviceWorker;

const NewPost = () => {
  const [previewImg, setPreviewImg] = useState(tiles.photo);
  const [isFetching, setIsFetching] = useState(false);
  const [postResponse, setPostResponse] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if(sw){
      sw.addEventListener('message', event => {
        if (event.source && event.data) {
          setIsFetching(false);
          console.log(event.data);
          setPostResponse("서버와의 통신이 원활하지 않습니다.");
        }
      });
    }
  }, []);

  const handleUploadTileClick = () => {
    imageRef.current?.click();
  };

  const handlePostClick = async () => {
    setIsFetching(true);
    const files = imageRef.current?.files;
    const content = contentRef.current?.value;
    await post(content!, files!);
    //console.log("NewPost Report : ");
    //console.log(result);
  //  setPostError(null);
  }

  const handleImageChange = () => {
    const files = imageRef.current?.files;
    
    for(let idx in files){
      if(idx === '0'){
        const reader = new FileReader();
        reader.onload = function(e) {
          setPreviewImg(e.target?.result);
        }
        reader.readAsDataURL(files[idx]);
      }
    }
  }


  return (
    <S.Container $center >
      <S.Form $center $column style={{maxWidth: "256px"}}>
        <input style={{display: "none"}} type="file" multiple ref={imageRef} onChange={handleImageChange}/>
        <S.ImageUploadTile $center $column onClick={handleUploadTileClick}>  
          <img src={previewImg} width={"50%"} style={{opacity: 0.3}}/>
          <div>사진을 첨부해 주세요.</div>
        </S.ImageUploadTile>

        <LabeledInput
          ref={contentRef}
          label={"내용"}
          stretch
          textarea
          height={2}
          placeholder={"사진에 대한 설명을 추가해 주세요."}
        />
        <Flex $column $alignStart style={{width: '100%', gap: '0.4rem'}}>
        <Label text={"태그"}/>
        <TagInput/>
        </Flex>
        { isFetching ? <>등록 중...</> : <></>}
        { postResponse ? <ErrorMsg text={postResponse}/> : <></>}
        <Button stretch text="등록" onClick={handlePostClick}/>
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

  ImageUploadTile: styled(Flex)`
    height: 256px;
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

