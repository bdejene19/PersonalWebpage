import styled, {keyframes} from 'styled-components';

// styled-components used throughout app
// later realized that would be cleaner to make styled components in each component rather than have a single file with all
// components also have media queries for devices widths
export const PageLayout = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    * {
        font-family: 'Merriweather', serif;


    }

    nav .immediate-contact {
        text-align: left;
        padding-left: 5%;
    }
    .profile-photo {
        width: 80%;
    }

    .label-cursor:hover {
        cursor: pointer;
    }
`;


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


   #journey-stepper {
       justify-content: space-around;
       width: 95vw;
       transform: translate(2.5vw, 13vh);
   }

   #stepper {
       border-radius: 0.5%;
       box-shadow: 0px 10px 10px 0 lightgrey;
   }

   #step-caption-content {
       height: 18vh;
   }

   #stepper-label-icon {
       cursor: pointer;
   }

   .progress-caption {
       background-color: white;
       width: 65%;
       height: 28vh;
       margin-top: 5%;
       padding: 0.5em;
   }

   // horizontal stepper hidden at 935px
   @media screen and (max-width: 935px) {
       display: none;
}

  
`;

// vertical stepper is visible for devices of 935px;
export const VerticalStepperContainer = styled.div`
    height: fit-content;
    display: none;

    @media screen and (max-width: 935px) {
       display: block;
    }


`
export const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto ;
    justify-items: center;
    align-content: center;
    grid-gap: 0;
    padding: 1em;

    #projects {
        color: slateblue;
        text-align: left;
        justify-content: left;
        justify-items: left;
        justify-self: left;
        grid-column: 1/5;
        grid-row: 1;
        padding-bottom: 0.5em;
    }

    .flipcard-inner {
        grid-row: 2;
        background-color: transparent;
        perspective: 1000px;
        cursor: pointer;  
        width: 22vw;
        color: slateblue;
        height: 70vh;
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
            font-size: 12px;
            ul  {
                margin-top: 0;
            }
        }
        .button-flipcard-back {
            text-align: center;
            justify-content: space-around;
            width: 100%;

            .btn-backSide {
                width: 35%;
                margin: 1em;
            }
        }
    }
    
    .vid-gif {
        height: 60%;
        width: 100%;
    }

    @media screen  and (max-width: 1000px) {
        .flipcard-inner {
            height: 80vh;
        }

        .btn-backSide {
            width: 20vw;
        }
        
    }

    /*  change display view of project cards to flex column */

    @media screen and (max-width: 916px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        .flipcard-inner {
            width: 55vw;
            height: 80vh;
            justify-content: center;
            margin-bottom: 10vh;
        }
        .btn-backSide {
            width: 15vw;
        }
    }


    @media screen and (max-width: 800px) {
        h3 {
            align-items: left;
        }

    }

    @media screen and (max-width: 550px) {
        .flipcard-inner {
            height: 67.5vh;
        }
    }
`;

