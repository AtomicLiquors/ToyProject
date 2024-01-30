import styled from "styled-components";

const Gallery: React.FC = () => {

    return (
        <S.GalleryGrid>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
            <S.GridItem src={'http://via.placeholder.com/200/200/'} draggable="false"/>
        </S.GalleryGrid>
    )
    
}

const S = {
    GalleryGrid: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    `,
    GridItem: styled.img`
        width: 100%;
    `
}
export default Gallery;
