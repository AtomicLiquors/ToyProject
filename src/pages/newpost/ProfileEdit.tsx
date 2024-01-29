import ProfileImg from '@/common/ProfileImg'
import Input from '@/common/gadgets/Input'
import Header, { marginTop } from '@/common/layout/Header'
import { Flex } from '@/styles/container'
import { Palette } from '@/styles/palette'
import styled from 'styled-components'

const ProfileEdit = () => {
  return (
    <S.Container>
      <Header/>
      <Flex $column $center style={{marginTop: marginTop}}>
        <ProfileImg width={64}/>
        <div style={{color: Palette.BLUE}}><u>프로필 사진 변경</u></div>
        <Input stretch label={"닉네임"} />
        <Input stretch label={"생년월일"} />
        <Input stretch label={"성별"} />
      </Flex>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
  `
}
export default ProfileEdit
