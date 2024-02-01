import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/common/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";
import PageHeader from "@/common/layout/PageHeader";
import LabeledInput from "@/common/gadgets/LabeledInput";
import Paths from "@/util/consts/Paths";
import ProfileImg from "@/common/ProfileImg";
import Button from "@/common/gadgets/Button";
import { useNavigate } from "react-router-dom";
import Page from "@/common/layout/Page";
import PageBody from "@/common/layout/PageBody";

const JoinInfo: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, close } = modalManager();

  return (
    <Page>
      <Modal isOpen={isOpen} close={close} />
      <PageHeader backlink={Paths.JOIN} />
      <PageBody>
        <Flex $column $center>
          <h1>Temp Logo</h1>
          <ProfileImg size={4} />
          <p>환영합니다, 사용자님.</p>
        </Flex>
        <S.Block
          $column
          $center
          style={{ borderTop: "1px solid #ccc", padding: "1rem", gap: "1rem" }}
        >
          <LabeledInput stretch label={"닉네임"} />
          <LabeledInput stretch label={"생년월일"} />
          <LabeledInput stretch label={"성별"} />
        </S.Block>
        <S.Block
          $column
          $center
          style={{ borderTop: "1px solid #ccc", padding: "1rem" }}
        >
          <LabeledInput stretch label={"프로필 메시지"} textAreaHeight={1} />

          <Button onClick={() => navigate(Paths.JOINKEYWORDS)} text={"완료"} stretch />
        </S.Block>
      </PageBody>
    </Page>
  );
};

const S = {
  Container: styled(Flex)`
    box-sizing: border-box;
    overflow: scroll;
    gap: 1rem;
  `,

  Block: styled(Flex)`
    box-sizing: border-box;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  `,
};

export default JoinInfo;
