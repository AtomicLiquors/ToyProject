import styled from 'styled-components'

const Label:React.FC<{text: string}> = ({text}) => {
  return (
    <S.Div>
      {text}
    </S.Div>
  )
}

const S = {
  Div: styled.div`
  font-weight: bold;
  width: 100%;
  text-align: left;
  `
}
export default Label
