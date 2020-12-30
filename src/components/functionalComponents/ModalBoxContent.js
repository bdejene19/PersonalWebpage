import React from 'react';
import styled from 'styled-components';

// modalbox component for 'why programming button' in contact drawer component

// styed components for react modalbox component
const ModalBackground = styled.div`
  display: none;
  position: fixed;
  overflow: auto;
  width: 50%; 
  transform: translate(50%, -75%);
  border: solid lightskyblue 10px; 
  border-radius: 2.5%;
  background: lightskyblue;
  z-index: 1;
  

  @media screen and (max-width: 1100px) {
      width: 60%; 
    transform: translate(20%, -75%);   
  }
  @media screen and (max-width: 900px) {
    transform: translate(15%, -75%);   
  }

  @media screen and (max-width: 800px) {
    transform: translate(7.5%, -100%);  
 
  }

`;

const ModalContent = styled.div`
  width: 100%;
  color: white;
  z-index: 1;

  div {
        background: lightskyblue;
        color: whitesmoke;
    }

    .passion-content {
      padding: 5%;
      background: whitesmoke;
      color: black;
      height: 70%;
      width: 100%;
    }


    
`;

const CloseButton = styled.span`
  font-size: 20px;
  float: right;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform: translate(-2vw, -1.5vh);

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;


export const ModalBoxContent = () => {
    return (
      // id for DOM manipulation of modal box
        <ModalBackground id="modal">
          <ModalContent>
            <div>
              {/* hide modal box */}
              <CloseButton onClick={() => document.getElementById("modal").style.display = "none"}>&times;</CloseButton>
             <i><h3>Why I chose coding</h3></i> 
            </div>
            
            {/* why I learned to code in a nutshell */}
            <div className="passion-content">
              <p>From the moment I hit 'run program', I felt an immediate strike in balance between creativity and logistics. An algorithm requires logic, however, the optimal solution often takes lots of creativity.</p>
              <p>From a young age, there has always been an internal power struggle between the logistic and creative aspects of my brain. The result of the two is man who plays piano, self teaches himself guitar, and a Double Major in Medical Sciences from the University of Western Ontario (UWO). I felt fulfillment, but didnt have happiness. This all changed from my first "hello world" algorithm.</p>
            </div>
          </ModalContent>
      </ModalBackground>
    )

}
