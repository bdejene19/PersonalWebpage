import styled, {keyframes} from 'styled-components';

export const PageLayout = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`


export const CoverPage = styled.div`
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background-image: url("https://image.freepik.com/free-vector/underwater-background-water-surface-ocean-sea_33099-1755.jpg");
    background-size: cover;
`;


const BubblesAnimation = keyframes`
    from {
        transform: translateY(0)
        opacity: 1;
    }
    to {
        transform: translateY(-110vh);
        opacity: 0;
    }
`;
export const BubblesContainer = styled.div`
    display: flex;
    padding: 3vw;
    transform: translateY(100vh);

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
    height: fit-content;
    width: 100vw;
    height: 95vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding-bottom: 20vh;
    background: url('https://process.filestackapi.com/cache=expiry:max/resize=width:1050/0w55oh9HTEqO3yqHs4tQ');
   
    img {
        height: 50vh;
        transform: rotate(90deg);
        margin-top: 22vh;
        margin-left: 5vw;
        justify-self: right;
    } 
`;

export const ProjectsWrapper = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr ;
    justify-items: center;
    align-content: center;
    grid-gap: 0;
    padding: 1em;

    #projects {
        color: slateblue;
        grid-column: 1;
        grid-row: 1;
        padding-bottom: 0.5em;
    }

    .flipcard-inner {
        grid-row: 2;
        background-color: transparent;
        perspective: 1000px;
        cursor: pointer;  
        width: 27vw;
        color: slateblue;
        height: 65vh;
        border: solid lightgrey 5px;
        box-shadow: slateblue 0px 0px 5px 5px;
        
        position: relative;
        transform-style: preserve-3d;   
    } 

    .flipcard-front, .flipcard-back{
        position: absolute;
        width: 100%;
        height: 100%; 
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden; 
    }
    
    
    .flipcard-back {
        color: white;
        transform: rotateY(180deg);

        .flipcard-back-content {
            background-color: slateblue;
            padding-left: 1em;
            height: 75%;

            ul  {
                margin-top: 0;
            }
        }
        .button-flipcard-back {
            text-align: center;
            padding: 1em;
            justify-content: space-around;
        }
    }
    
    .vid-gif {
        height: 60%;
        width: 100%;
    }
`;

