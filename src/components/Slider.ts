import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme})=>theme.light};
    display: flex;
    flex-direction: row;
    padding; 100px 0 100px 0;
    font-family: 'Lato';

    @media (max-width: 800px){
        flex-direction: column;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 30%;
    padding: 50px;
    justify-content: center;

    h3{
        font-size: 40px;
        font-weight: bold;
        color: #FF0E48;
    }
    p{
        width: 80%;
        font-size: 20px;
        color: ${({theme}) => theme.font}
    }

    @media (max-width: 800px){
        height: 30%;
        width: 60%;
        align-self: center;
        h3{
            text-align: center;
        }
        p{
            text-align: center;
            width: 100%;
        }
    }
`;

const CarouselContainer = styled.div`
    display: flex;
    height: 60%;
    width: 70%;
    vertical-align: center;
    justify-content: center;
    margin-top: 200px;

    @media (max-width: 800px){
        margin-top: -40px;
        height: 70%;
        width: 100%;
    }
`;

const SlideContainer = styled.div`
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    position: relative;

    img{
        height: 100%;
        width: 100%;
        border-radius: 20px
        object-fit: contain;
        transition: all 0.2s ease-in-out;
    }

    img:hover{
        transform: scale(1.2);
        opacity: 0.7;
    }
`;

const SlideDescription = styled.div`
    background-color: #000;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    widht: 100%;
    opacity: 0.8;

    span{
        color: #fff;
        display: block;
        font-size: 22px;
        padding: 20px 0 22px 22px;
    }
`;

const Components = {
    Container,
    Title,
    SlideContainer,
    SlideDescription,
    CarouselContainer,
};

export default Components;