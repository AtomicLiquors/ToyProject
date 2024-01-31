import ProfileImg from '@/common/ProfileImg'
import LabledInput from '@/common/gadgets/Input'
import PageHeader, { marginTop } from '@/common/layout/PageHeader'
import { Flex } from '@/styles/container'
import { Palette } from '@/styles/palette'
import styled from 'styled-components'

const ProfileEdit = () => {
  return (
    <S.Container>
      <PageHeader/>
      <Flex $column $center style={{marginTop: marginTop + `rem`}}>
        <ProfileImg size={6}/>
        <div style={{color: Palette.BLUE}}><u>프로필 사진 변경</u></div>
        <LabledInput stretch label={"닉네임"} />
        <LabledInput stretch label={"생년월일"} />
        <LabledInput stretch label={"성별"} />
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
