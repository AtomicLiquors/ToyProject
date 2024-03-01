import styled from "styled-components";
import Gallery from "@/common/Gallery";
import { clearDefault } from "@/styles/clear-default";
import { Flex } from "@/styles/container";
import { outlinedIcons } from "@/styles/images";
import Page from "@/common/layout/Page";
import { getPosts } from "@/api/post";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const emptyMsg = "조회 결과가 없습니다.";
  const searchRef = useRef<HTMLInputElement>(null);

  const [searchData, setSearchData] = useState<Array<PostType>>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [searchResponse, setSearchResponse] = useState("");

  useEffect(() => {
    const sw = navigator.serviceWorker;

    if (sw) {
      sw.addEventListener("message", (event) => {
        if (event.source && event.data) {
          console.log(event.data);
          if(!event.data.data){
            setSearchResponse(event.data.message);
          }
        }
      });
    }
  }, []);

  const search = async (keyword: string) => {
    //To-Do : 서버 가동 안될때 에러처리.
    setIsFetching(true);
    const response = await getPosts(keyword);
    setIsFetching(false);
    if(response.data)
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
      <S.InputTab>
        <S.InputContainer $center>
          <Flex $center style={{ width: "3rem", paddingRight: "1rem" }}>
            {isFetching ? (
              <>검색중</>
            ) : (
              <img
                onClick={handleSearchButtonClick}
                src={outlinedIcons.search}
                style={{ cursor: "pointer" }}
              />
            )}
          </Flex>
          <S.SearchInput
            onKeyDown={handleSearchInputKeyPress}
            ref={searchRef}
          />
        </S.InputContainer>
      </S.InputTab>
      {searchData[0] ? (
        <></>
      ) : (
        <>{searchResponse}</>
      )}
      <Gallery posts={searchData} emptyMsg={emptyMsg}/>
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
