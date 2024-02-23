import { clearDefault } from "@/styles/clear-default";
import { Flex } from "@/styles/container";
import { Palette } from "@/styles/palette";
import { useState, useRef } from "react";
import styled from "styled-components";

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const inputRef = useRef(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === " " || e.key === "Spacebar" || e.key === "Enter") && !e.shiftKey) {
      addTag();
      e.preventDefault();
    } else if (e.key === "Backspace") {
      if (getInputText() !== "") return;
      deleteLastTag();
    }
  };

  const addTag = () => {
    const text = getInputText();
    if (text === "") return;

    const newTagItem: string = text;

    setTags([...tags, newTagItem]);
    clearInputText();
  };

  const clearInputText = () => {
    const input: HTMLInputElement | null = inputRef.current;
    input!.value = "";
  };

  const getInputText: () => string = () => {
    const input: HTMLInputElement | null = inputRef.current;
    return input!.value.trim();
  };

  const deleteTag = (index: number) => {
    tags.splice(index, 1);
    setTags([...tags]);
  };

  const deleteLastTag = () => {
    tags.pop();
    setTags([...tags]);
  };

  const handleTagDeleteClick = (index: number) => {
    deleteTag(index);
  };

  return (
    <S.Container>
      <S.Wrap $alignCenter $backgroundColor={Palette.GRAY}>
        <S.Input ref={inputRef} onKeyDown={(e) => handleKeyPress(e)} />
      </S.Wrap>
      <S.Tags>
        {tags.map((tag, index) => {
          return (
            <S.Tag key={index} $center>
              <div>{tag}</div>
              <div onClick={() => handleTagDeleteClick(index)}>
                <b>x</b>
              </div>
            </S.Tag>
          );
        })}
      </S.Tags>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    box-sizing: border-box;
  `,
  Tags: styled(Flex)`
    width: 100%;
    flex-wrap: wrap;
    gap: 0.2rem;
  `,
  Wrap: styled(Flex)<{ $backgroundColor: string }>`
    border-radius: 1rem;
    box-sizing: border-box;
    padding: 0.4rem;
    width: 100%;
    background: ${(props) => props.$backgroundColor};
  `,

  Tag: styled(Flex)`
    border-radius: 50px;
    padding: 0.3rem;
    background: #ddd;
    gap: 0.2rem;
  `,

  Input: styled.input`
    ${clearDefault.input}
    width: 100%;
  `,
};
export default TagInput;
