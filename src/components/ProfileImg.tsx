import {outlinedIcons} from '@/styles/icons'
import { profileColorGenerator } from '@/util/helpers/colorGenerator';
// width, img src

interface ImgProps {
    width: number;
}

const ProfileImg: React.FC<ImgProps> = ({width}) => {
    return (
        <img src={outlinedIcons.user} width={width} style={{borderRadius: '100%', background: profileColorGenerator('sdfsfdstring')}}/>
    )
}

export default ProfileImg;