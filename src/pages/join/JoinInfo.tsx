import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/common/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";
import PageHeader from "@/common/layout/PageHeader";
import LabledInput from "@/common/gadgets/Input";
import Paths from "@/util/consts/Paths";
import ProfileImg from "@/common/ProfileImg";
import Button from "@/common/gadgets/Button";
import { useNavigate } from "react-router-dom";

const JoinInfo: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, close } = modalManager();

  return (
    <S.Container $column $center>
      <Modal isOpen={isOpen} close={close} />
      <PageHeader backlink={Paths.JOIN} />
      <h1>Temp Logo</h1>
      <ProfileImg size={3} />

      <S.Block $column $center style={{ borderTop: "1px solid #ccc" }}>
        <Flex $column $center>
          <p>환영합니다, 사용자님.</p>
        </Flex>
        <LabledInput stretch label={"닉네임"} />
        <LabledInput stretch label={"생년월일"} />
        <LabledInput stretch label={"성별"} />
      </S.Block>
      <S.Block $column $center style={{ borderTop: "1px solid #ccc" }}>
        <LabledInput stretch label={"프로필 메시지"} textAreaHeight={10} />

        <Button onClick={() => navigate(Paths.FEED)} text={"완료"} stretch />
      </S.Block>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    box-sizing: border-box;
    position: absolute;
    background: white;
    height: 100%;
    width: 100%;
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
