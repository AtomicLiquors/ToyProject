import styled from "styled-components";
import Gallery from "@/common/Gallery";
import { clearDefault } from "@/styles/clear-default";
import { Flex } from "@/styles/container";
import { outlinedIcons } from "@/styles/icons";

const Search = () => {
  return (
    <S.Container>
      <S.InputTab>
        <S.InputContainer $center>
          <Flex $center style={{width: "3rem", paddingRight: "1rem"}}><img src={outlinedIcons.search}/></Flex>
          <S.SearchInput />
        </S.InputContainer>
      </S.InputTab>
      <Gallery />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    overflow: scroll;
  `,

  InputTab: styled(Flex)`
    padding: 1rem;
  `,

  InputContainer: styled(Flex)`
    padding: 0.4rem;
    width: 100%;
    height: 3rem;
    border-radius: 1rem;
    background: gray;
  `,

  SearchInput: styled.input`
    ${clearDefault.input}
    width: 100%;
    height: 100%;
    border: none;
  `,
};
export default Search;
