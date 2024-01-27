import styled from 'styled-components';
import {outlinedIcons} from '@/styles/icons'
import { Link } from "react-router-dom";
import Paths from "@/consts/paths";

const Navbar:React.FC<{height: number}> = ({height}) => {
    return (
        <S.Container style={{height: height}}>
            <Link to={Paths.FEED}>
                <img src = {outlinedIcons.home} width={32}/>
            </Link>
            <Link to={Paths.SEARCH}>
                <img src = {outlinedIcons.search} width={32}/>
            </Link>
            <Link to={Paths.NEWPOST}>
            <img src = {outlinedIcons.add} width={32}/></Link>
            <Link to={Paths.NOTIFICATIONS}>
            <img src = {outlinedIcons.home} width={32}/></Link>
            <Link to={Paths.PROFILE}>
            <img src = {outlinedIcons.user} width={32}/></Link>
        </S.Container>
    );
}

const S = {
    Container: styled.div`
        position: absolute;
        background: white;
        padding: 10px 0 10px 0;
        z-index: 1;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
    `
}


export default Navbar;