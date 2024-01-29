import Button from "@/components/gadgets/Button";
import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/components/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";
import Header from "@/components/layout/Header";
import { useNavigate } from "react-router-dom";
import Paths from "@/util/consts/paths";

const Join: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, open, close } = modalManager();

  return (
    <S.Container $column $center>
    
      <Modal isOpen={isOpen} close={close}/>
      <Header backlink={Paths.LANDING}/>
      <h1>Temp Logo</h1>
      <Flex $column $center>
        <p>소셜 로그인을 통해 인증해주세요.</p>
      </Flex>
      
      <Button onClick={open} text={"SNS 계정으로 회원가입"} stretch />
      <Button onClick={() => navigate(Paths.JOININFO)}text={"인증완료"} stretch />
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
