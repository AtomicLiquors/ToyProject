import {outlinedIcons} from '@/styles/icons'
import { profileColorGenerator } from '@/util/helpers/colorGenerator';
import styled from "styled-components";
// width, img src

interface ImgProps {
    width: number;
    height?: number;
    username?: string;
}

const ProfileImg: React.FC<ImgProps> = ({width, height = 32, username = '2kooong2'}) => {

    return (
        <S.Profile src={outlinedIcons.user} width={width} height={height} $username={username}/>
    )
}

const S = {
    Profile: styled.img<{$username: string}>`
        border-radius: 100%;
        background: ${props => profileColorGenerator(props.$username)};
    `
}

export default ProfileImg;