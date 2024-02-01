import Button from "@/common/gadgets/Button";
import Keyword from "@/common/gadgets/Keyword";
import Page from "@/common/layout/Page";
import PageBody from "@/common/layout/PageBody";
import PageHeader from "@/common/layout/PageHeader";
import { Flex } from "@/styles/container";
import Paths from "@/util/consts/Paths";
import { useNavigate } from "react-router-dom";
//import styled from 'styled-components'

const JoinKeywords = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <PageHeader backlink={Paths.JOININFO} />
      <PageBody>
        <Flex $column $center style={{ gap: "1rem" }}>
          <div>
            <p>관심있는 주제를 선택해주세요!</p>
            <p>(최소 n개 이상)</p>
          </div>
          <Flex $column $center style={{ gap: "0.4rem" }}>
            <Flex style={{ gap: "0.4rem" }}>
              <Keyword text={"사진"} />
              <Keyword text={"레시피"} />
              <Keyword text={"취미"} />
              <Keyword text={"운동"} />
              <Keyword text={"출사"} />
              <Keyword text={"스포츠"} />
            </Flex>
            <Flex style={{ gap: "0.4rem" }}>
              <Keyword text={"레시피"} />
              <Keyword text={"취미"} />
              <Keyword text={"사진"} />
              <Keyword text={"레시피"} />
              <Keyword text={"취미"} />
              <Keyword text={"사진"} />
              <Keyword text={"레시피"} />
              <Keyword text={"취미"} />
            </Flex>
          </Flex>
          <Button
            onClick={() => navigate(Paths.FEED)}
            text={"시작하기"}
            stretch
          />
        </Flex>
      </PageBody>
    </Page>
  );
};

// const S = {
//   Div: styled.div`
//   `
// }
export default JoinKeywords;
