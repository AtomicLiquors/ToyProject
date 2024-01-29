import styled from "styled-components";
import Gallery from "@/common/Gallery";
import Input from "@/common/gadgets/Input";

const Search = () => {
  return (
    <S.Container>
      <Input placeholder="🔎"/>
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
  `,
};
export default Search;
