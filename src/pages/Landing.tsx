import Button from "@/components/gadgets/Button";
import Input from "@/components/gadgets/Input";
import styled from "styled-components";

import { Flex } from "@/styles/container";
import Modal from "@/components/layout/Modal";

const Landing: React.FC = () => {
  return (
    <S.Container>
      <Modal/>
      <h1>Temp Logo</h1>
      <Flex $column $center>
        <p>소개 페이지 문구입니다.</p>
        <p>다람쥐 헌 쳇바퀴에 타고파.</p>
        <p>다람쥐 헌 쳇바퀴에 타고파.</p>
      </Flex>
      <Input $stretch/>
      <Input $stretch/>
      <Button text={"로그인"} $stretch />
      <hr />
      <Flex $column $center>
        <p>계정이 없으신가요?</p>
        <p>회원가입</p>
      </Flex>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  // To-Do: 아래 3개는 flex로 대체 가능 : 여백을 함께 주려면 어떻게 할지 구상 바람.
};

export default Landing;
