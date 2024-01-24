import styled from 'styled-components';
import { navIcons } from '@/styles/icons.ts';


const Navbar:React.FC = () => {
    return (
        <S.Container>
            <img src = {navIcons.home}/>
            <img src = {navIcons.home}/>
            <img src = {navIcons.add}/>
            <img src = {navIcons.home}/>
            <img src = {navIcons.home}/>
        </S.Container>
    );
}

const S = {
    Container: styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
    `
}


export default Navbar;