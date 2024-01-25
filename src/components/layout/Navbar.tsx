import styled from 'styled-components';
import {outlinedIcons} from '@/styles/icons'


const Navbar:React.FC = () => {
    return (
        <S.Container>
            <img src = {outlinedIcons.home} width={32}/>
            <img src = {outlinedIcons.search} width={32}/>
            <img src = {outlinedIcons.add} width={32}/>
            <img src = {outlinedIcons.home} width={32}/>
            <img src = {outlinedIcons.user} width={32}/>
        </S.Container>
    );
}

const S = {
    Container: styled.div`
        position: absolute;
        z-index: 1;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
    `
}


export default Navbar;