import LabeledInput from "@/common/gadgets/LabeledInput";
import { Flex } from "@/styles/container";
import styled from "styled-components";
import { tiles } from "@/styles/images";
import Button from "@/common/gadgets/Button";
import Label from "@/common/gadgets/Label";
import TagInput from "@/common/gadgets/TagInput";

const NewPost = () => {
  return (
    <S.Container $center >
      <S.Form $center $column style={{maxWidth: "256px"}}>
        <S.ImageUploadTile $center $column>
          <img src={tiles.photo} width={"50%"} style={{opacity: 0.3}}/>
          <div>사진을 첨부해 주세요.</div>
        </S.ImageUploadTile>

        <LabeledInput
          label={"내용"}
          stretch
          textAreaHeight={2}
          placeholder={"사진에 대한 설명을 추가해 주세요."}
        />

        <Label text={"태그"}/>
        <TagInput/>

        <Button stretch text="등록"/>
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
    height: 100%;
    width: 100%;
    gap: 3rem;
  `,
};
export default NewPost;
