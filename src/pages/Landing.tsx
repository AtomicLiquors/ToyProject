import Button from "@/components/gadgets/Button";
import Input from "@/components/gadgets/Input";
import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/components/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";

const Landing: React.FC = () => {

  const { isOpen, open, close } = modalManager();

  return (
    <S.Container $column $center>
      <Modal isOpen={isOpen} close={close}/>
      <h1>Temp Logo</h1>
      <Flex $column $center>
        <p>소개 페이지 문구입니다.<br/>다람쥐 헌 쳇바퀴에 타고파.<br/>다람쥐 헌 쳇바퀴에 타고파.</p>
      </Flex>
      <Input $stretch/>
      <Input $stretch/>
      <Button onClick={open} text={"로그인"} $stretch />
      <hr />
      <Flex $column $center>
        <p>계정이 없으신가요?</p>
        <p>회원가입</p>
      </Flex>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    padding-left: 20px;
    padding-right: 20px;
  `,
};

export default Landing;
