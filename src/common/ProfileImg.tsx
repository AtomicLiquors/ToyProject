import { Flex } from '@/styles/container';
import {outlinedIcons} from '@/styles/images'
import { profileColorGenerator } from '@/util/helpers/colorGenerator';
import styled from "styled-components";

interface ImgProps {
    size?: number;
    username?: string;
}

const ProfileImg: React.FC<ImgProps> = ({size=3, username = '2kooong2'}) => {

    return (
        <S.Gradient $size={size} $center $column>
            <S.Profile src={outlinedIcons.user} $size={size} $username={username}/>
        </S.Gradient>
    )
}

const S = {
    Profile: styled.img<{$username: string, $size: number}>`
        border: 3.2px solid #fff;
        border-radius: 100%;
        width: ${props => props.$size}rem;
        height: ${props => props.$size}rem;
        background: ${props => profileColorGenerator(props.$username)};
    `,

    Gradient: styled(Flex)<{$size: number}>`
        border-radius: 100%;
        width: ${props => props.$size + 0.7}rem;
        height: ${props => props.$size + 0.7}rem;
        background: radial-gradient(circle at 30% 107%, #47F0FB 0%, #1AB7D9 45%, #0F54A6 90%);
    `,
}

export default ProfileImg;