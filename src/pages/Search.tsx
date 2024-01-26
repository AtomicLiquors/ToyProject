import styled from "styled-components";
import Gallery from "@/components/Gallery";
import Input from "@/components/gadgets/Input";

const Search = () => {
  return (
    <S.Div>
      <Input placeholder="🔎"/>
      <Gallery />
    </S.Div>
  );
};

const S = {
  Div: styled.div`
    background: white;
  `,
};
export default Search;
