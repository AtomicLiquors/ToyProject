
import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/components/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";
import Header from "@/components/layout/Header";
import Input from "@/components/gadgets/Input";
import Paths from "@/consts/paths";
import ProfileImg from "@/components/ProfileImg";


const JoinInfo: React.FC = () => {

  const { isOpen, close } = modalManager();

  return (
    <S.Container $column $center>
    
      <Modal isOpen={isOpen} close={close}/>
      <Header backlink={Paths.JOIN}/>
      <h1>Temp Logo</h1>
      
      <ProfileImg/>
      
      <Flex $column $center>
        <p>환영합니다, 누구누구님.</p>
      </Flex>
      <div>닉네임</div>
      <Input $stretch/>
      <div>생년월일</div>
      <Input $stretch/>
      <div>성별</div>
      <Input $stretch/>
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

export default JoinInfo;
