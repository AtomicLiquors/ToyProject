import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/components/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";

const Profile: React.FC = () => {

  const { isOpen, close } = modalManager();

  return (
    <S.Container $column $center>
      <Modal isOpen={isOpen} close={close}/>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    position: absolute;
    background: white;
    height: 100%;
    width: 100%;
  `,
};

export default Profile;
