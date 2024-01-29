import styled from 'styled-components'

type SwipeTabProps = {
    children: React.ReactNode;
}

const SwipeTab:React.FC<SwipeTabProps> = ({children}) => {
  return (
    <S.Div>
      {children}
    </S.Div>
  )
}

const S = {
  Div: styled.div`
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll; 
  `
}
export default SwipeTab
