import styled, {keyframes} from 'styled-components';

export const CoverPage = styled.div`
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background-image: url("https://image.freepik.com/free-vector/underwater-background-water-surface-ocean-sea_33099-1755.jpg");
    background-size: cover;
`


const BubblesAnimation = keyframes`
    from {
        transform: translateY(0)
        opacity: 1;
    }


    to {
        transform: translateY(-110vh);
        opacity: 0;
    }
   

`
export const BubblesContainer = styled.div`
    display: flex;
    padding: 3vw;
    transform: translateY(100vh);
    border: solid black;

    img {
        animation: ${BubblesAnimation} 6s linear infinite;
        padding: 3vw;

        &:nth-child(1) {
            animation-delay: 1.5s;
        }

        &:nth-child(2) {
            animation-delay: -0.75s;
        }
        &:nth-child(3) {
            animation-delay: 0s;
        }  
        
        &:nth-child(4) {
            animation-delay: -2s;
        }  
        
        &:nth-child(5) {
            animation-delay: 3s;
        }  

        
    }   
`;
export const Bubbles = styled.img`
    padding: 3vw;
    width: 15vw; 
    height: 25vh;
`;


export const JourneyDiv = styled.div`
    margin-left: 5vw;
    padding-top: 3vh;
`;


