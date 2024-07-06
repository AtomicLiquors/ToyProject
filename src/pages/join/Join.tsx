import Button from "@/common/gadgets/Button";
import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/common/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";
import PageHeader from "@/common/layout/PageHeader";
import { useNavigate } from "react-router-dom";
import Paths from "@/util/consts/Paths";

const Join: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, open, close } = modalManager();

  //To-Do: Page Component로 wrapping.

  return (
    <S.Container $column $center >

      <Modal isOpen={isOpen} close={close}/>
      <PageHeader backlink={Paths.LANDING}/>
      <h1>Temp Logo</h1>
      <Flex $column $center>
        <p>소셜 로그인을 통해 인증해주세요.</p>
      </Flex>
      
      <Button onClick={open} text={"SNS 계정으로 회원가입"} stretch />
      <Button onClick={() => navigate(Paths.JOININFO)} text={"인증완료"} stretch />
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    box-sizing: border-box; 
    padding: 2em;
    position: absolute;
    background: white;
    height: 100%;
    width: 100%;
  `,
};

export default Join;
