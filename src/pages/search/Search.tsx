import styled from "styled-components";
import Gallery from "@/common/Gallery";
import { clearDefault } from "@/styles/clear-default";
import { Flex } from "@/styles/container";
import { outlinedIcons } from "@/styles/images";
import Page from "@/common/layout/Page";

const Search = () => {
  return (
    <Page>
      <S.InputTab>
        <S.InputContainer $center>
          <Flex $center style={{width: "3rem", paddingRight: "1rem"}}><img src={outlinedIcons.search}/></Flex>
          <S.SearchInput />
        </S.InputContainer>
      </S.InputTab>
      <Gallery />
    </Page>
  );
};

const S = {
  InputTab: styled(Flex)`
    padding: 1rem;
  `,

  InputContainer: styled(Flex)`
    padding: 0.4rem;
    width: 100%;
    height: 3rem;
    box-sizing: border-box;
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
