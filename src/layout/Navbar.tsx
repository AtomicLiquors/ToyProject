import styled from 'styled-components';
import home from '/images/icons/nav_home.png';

const Navbar:React.FC = () => {
    return (
        <S.Container>
            <img src = {home}/>
            <img src = {home}/>
        </S.Container>
    );
}

const S = {
    Container: styled.div`
        display: flex;
    `
}


export default Navbar;