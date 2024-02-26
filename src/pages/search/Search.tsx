import styled from "styled-components";
import Gallery from "@/common/Gallery";
import { clearDefault } from "@/styles/clear-default";
import { Flex } from "@/styles/container";
import { outlinedIcons } from "@/styles/images";
import Page from "@/common/layout/Page";
import { getPosts } from "@/api/post";
import { useRef, useState } from "react";

const Search = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const [searchData, setSearchData] = useState<Array<PostType>>([]);

  const search = async (keyword: string) => {
    const response = await getPosts(keyword);
    console.log(response);
    setSearchData(response.data);
  };

  const handleSearchButtonClick = () => {
    const keyword = searchRef.current!.value.trim();
    if (keyword === "") return;
    search(searchRef.current!.value);
  };

  const handleSearchInputKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      search(searchRef.current!.value);
    }
  };

  return (
    <Page>
      {searchData[0] ? (
        <Flex>
          {searchData.map((post, index) => (
            <div key={index}>{post.id + ""}</div>
          ))}
        </Flex>
      ) : (
        <></>
      )}

      <S.InputTab>
        <S.InputContainer $center>
          <Flex $center style={{ width: "3rem", paddingRight: "1rem" }}>
            <img onClick={handleSearchButtonClick} src={outlinedIcons.search} />
          </Flex>
          <S.SearchInput
            onKeyDown={handleSearchInputKeyPress}
            ref={searchRef}
          />
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
