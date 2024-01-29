import Input from '@/common/gadgets/Input'
import { Flex } from '@/styles/container'
import styled from 'styled-components'


const NewPost = () => {
  return (
    <S.Container>
      <S.Form $center $column>
        <Flex $center style={{height: '160px'}}>사진을 첨부해 주세요.</Flex>
        <Input label={'내용'} heightInVh={20}/>
      </S.Form>
    </S.Container>
  )
}

const S = {
  Container: styled.div`  
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
  `,
  Form: styled(Flex)`
    height: 100%;
    width: 100%;
  `
}
export default NewPost
