import styled from 'styled-components'
import ProfileImg from './ProfileImg';
import Button from './gadgets/Button';
import { Palette } from '@/styles/palette';



export enum TabType { FOLLOW }

//     nickname: string;
//     profileImg: string;
//     timestamp: string;
// }

interface TabProbs {
    userImg: string;
    username: string;
    type: TabType;
    userCount?: number;
    postImg?: string;
    timestamp: string;
}

const NotificationTab: React.FC<TabProbs> = ({username, type, userCount, postImg, timestamp}) => {
  return (
    <S.Container>
      <S.Grid>
        <ProfileImg width={16}/> {/* src={userImg} */}
        <div>
        <b>{username}</b>님
        { (userCount ? `외 ${userCount} 명이` : '이') + ' '}
        { type === TabType.FOLLOW ? '회원님을 팔로우합니다.' : ''}
        <span style={{color: Palette.GRAY}}>{timestamp}</span>
        </div>
        { postImg ? <img src={postImg} width={32}/> : <></>}
        { type === TabType.FOLLOW ? <Button text={'팔로우'}/> : <></>}
      </S.Grid>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    width: 100%;
  `,

  Grid: styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    gap: 1em;
  `
}
export default NotificationTab
