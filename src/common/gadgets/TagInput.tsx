import { clearDefault } from "@/styles/clear-default";
import { Flex } from "@/styles/container";
import { Palette } from "@/styles/palette";
import { useState, useRef } from "react";
import styled from "styled-components";

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const inputRef = useRef(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " && !e.shiftKey) {
        addTag();
        e.preventDefault();
    }
  }

  const addTag = () => {
    const input: HTMLInputElement | null = inputRef.current;
    const text = input!.value.trim();

    if (text === "") return;

    const newTag: string = text;

    setTags([...tags, newTag]);
    input!.value = "";
  };

  //To-Do : 백스페이스로 태그 slice로 삭제, 
  return (
    <S.Div $alignCenter $backgroundColor={Palette.GRAY}>
      {tags.map((tag, index) => {
        return (
          <S.Tag key={index} $center>
            <div>{tag}</div> <div><b>x</b></div>
          </S.Tag>
        );
      })}
      <S.Input ref={inputRef} onKeyDown={(e) => handleKeyPress(e)} />
    </S.Div>
  );
};

const S = {
  Tags: styled(Flex)``,

  Div: styled(Flex)<{ $backgroundColor: string }>`
    border-radius: 1rem;
    height: 2rem;
    width: 100%;
    background: ${(props) => props.$backgroundColor};
  `,

  Tag: styled(Flex)`
    border-radius: 0.8rem;
    padding: 0.2rem;
    background: #fff;
    gap : 0.2rem;
  `,

  Input: styled.input`
    ${clearDefault.input}
  `,
};
export default TagInput;
