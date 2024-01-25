import { useRef, useEffect } from 'react';
import { Flex } from "@/styles/container";
import styled from "styled-components";
import { ModalManager } from "@/manager/ModalManager.ts";


const Modal: React.FC<ModalManager> = ({isOpen: open, close}) => {

  const modalBackground = useRef<HTMLDivElement>(null);

  useEffect(()=> {
    modalBackground.current!.style.display = ( open ? 'flex' : 'none' );
  }, [open])
  
  return (
    <S.ModalBackground ref={modalBackground} $center $column>
      <S.ModalContent>
        <span onClick={close}>&times;</span>
        <p>Some text in the Modal..</p>
      </S.ModalContent>
    </S.ModalBackground>
  );
};

const S = {
  ModalBackground: styled(Flex)`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  `,
  // 배경색을 덮어주는 역할.

  ModalContent: styled.div`
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    height: 50%;
    width: 50%; /* Could be more or less, depending on screen size */
  `,
  // width, height는 모바일 / 데스크톱 환경에서 서로 다르게 적용되어야 할 것.
};

export default Modal;
