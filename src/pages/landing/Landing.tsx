import Button from "@/common/gadgets/Button";
import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/common/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";
import { Link } from "react-router-dom";
import Paths from "@/util/consts/Paths";
import { photos } from "@/styles/images";
import { Palette } from "@/styles/palette";

const Landing = () => {

  const { isOpen, open, close } = modalManager();

  return (
    <S.Container $bg={photos.main} $color={Palette.WHITE}>
      <S.DarkLayer $column $center >
      <Modal isOpen={isOpen} close={close} />
      <h1>Temp Logo</h1>
      <Flex $column $center style={{}}>
        <p>
          소개 페이지 문구입니다.
          <br />
          다람쥐 헌 쳇바퀴에 타고파.
          <br />
          다람쥐 헌 쳇바퀴에 타고파.
          <br/>
        </p>
      </Flex>
      
      <Button onClick={open} text={"SNS 계정으로 로그인"} widthRatio={60}/>
      <hr />
      <Flex $column $center>
        <p>계정이 없으신가요?</p>
        <Link to={Paths.JOIN}>회원가입</Link>
      </Flex>
      </S.DarkLayer>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)<{$bg: string, $color: string}>`
    color: ${(props) => props.$color};
    background-image: url("${(props) => props.$bg}");
    height: 100%;
    width: 100%;
    position: absolute;
  `,

  DarkLayer: styled(Flex)`
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    top: 0;
    left: 0;
  `
};

export default Landing;
