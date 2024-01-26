import {outlinedIcons} from '@/styles/icons'
import { profileColorGenerator } from '@/util/colorGenerator';
// width, img src

const Profile: React.FC = () => {
    return (
        <img src={outlinedIcons.user} width={64} style={{borderRadius: '100%', background: profileColorGenerator('sdfsfdstring')}}/>
    )
}

export default Profile;