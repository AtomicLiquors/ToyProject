import Button from "@/common/gadgets/Button";
import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/common/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";
import { Link } from "react-router-dom";
import Paths from "@/util/consts/Paths";

const Landing: React.FC = () => {
  const { isOpen, open, close } = modalManager();

  return (
    <S.Container $column $center>
      <Modal isOpen={isOpen} close={close} />
      <h1>Temp Logo</h1>
      <Flex $column $center>
        <p>
          소개 페이지 문구입니다.
          <br />
          다람쥐 헌 쳇바퀴에 타고파.
          <br />
          다람쥐 헌 쳇바퀴에 타고파.
        </p>
      </Flex>
      
      <Button onClick={open} text={"SNS 계정으로 로그인"} stretch />
      <hr />
      <Flex $column $center>
        <p>계정이 없으신가요?</p>
        <Link to={Paths.JOIN}>회원가입</Link>
      </Flex>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
  
    background: white;
    height: 100%;
    width: 100%;
    position: absolute;
  `,
};

export default Landing;
