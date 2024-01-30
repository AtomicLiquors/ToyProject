import styled from 'styled-components'

type SwipeTabProps = {
    children: React.ReactNode;
}

import { Palette } from "@/styles/palette";

const $borderColor = Palette.GRAY;

const SwipeTab:React.FC<SwipeTabProps> = ({children}) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    border-bottom: 1px solid ${$borderColor};
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll; 
  `
}
export default SwipeTab
