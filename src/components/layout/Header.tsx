import {outlinedIcons} from '@/styles/icons'
import { Flex } from '@/styles/container';


const Header:React.FC = () => {
    return (
        <Flex $spaceAround>
            <img src = {outlinedIcons.home} width={32}/>
            <img src = {outlinedIcons.search} width={32}/>
            <img src = {outlinedIcons.add} width={32}/>
            <img src = {outlinedIcons.home} width={32}/>
            <img src = {outlinedIcons.user} width={32}/>
        </Flex>
    );
}


export default Header;