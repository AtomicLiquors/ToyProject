import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/components/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";
import Header from "@/components/layout/Header";
import Input from "@/components/gadgets/Input";
import Paths from "@/util/consts/paths";
import ProfileImg from "@/components/ProfileImg";
import Button from "@/components/gadgets/Button";
import { useNavigate } from "react-router-dom";

const JoinInfo: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, close } = modalManager();

  return (
    <S.Container $column $center>
      <Modal isOpen={isOpen} close={close} />
      <Header backlink={Paths.JOIN} />
      <h1>Temp Logo</h1>
       <ProfileImg width={32}/>
      
      <S.Block $column $center style={{borderTop: '1px solid #ccc'}}>
        <Flex $column $center>
          <p>환영합니다, 사용자님.</p>
        </Flex>
        <Input stretch label={"닉네임"} />
        <Input stretch label={"생년월일"} />
        <Input stretch label={"성별"} />
      </S.Block>
      <S.Block $column $center style={{borderTop: '1px solid #ccc'}}>
        <Input stretch label={"프로필 메시지"} heightInVh={10} />

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

