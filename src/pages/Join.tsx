import Button from "@/components/gadgets/Button";
import Input from "@/components/gadgets/Input";
import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/components/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";

const Join: React.FC = () => {

  const { isOpen, open, close } = modalManager();

  return (
    <S.Container $column $center>
      <Modal isOpen={isOpen} close={close}/>
      <h1>Temp Logo</h1>
      <Flex $column $center>
        <p>회원가입하세요.</p>
      </Flex>
      <Input $stretch/>
      <Input $stretch/>
      <Button text={"back"} $stretch />
      <Button onClick={open} text={"가입"} $stretch />
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
    position: absolute;
  `,
};

export default Join;
