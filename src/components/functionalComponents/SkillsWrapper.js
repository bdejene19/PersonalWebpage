import React from 'react'
import {Typography} from '@material-ui/core';
import styled from 'styled-components';
const SkillsDiv = styled.div`
    color: slateblue;
   
   h2 {
       text-align: center;
       grid-column: 1/3;
       padding-bottom: 0;
       margin-bottom: 0vh;
   }

   .skills-wrapper {
        transform: translate(5vw, 3vh);
       display : grid;
       grid-template-columns: 1fr 1fr;
       grid-template-rows: auto;
        padding-bottom: 1em;

       background: linear-gradient(200deg, rgba(245, 222, 179, 0.6), rgba(255, 255, 255, 0.6));

   }

   .programming-skills {
       text-align: center;
   }
`;

function SkillsWrapper() {
    return (
        <SkillsDiv>
            <i><Typography variant="h3" color="primary" style={{fontSize: 36, paddingLeft: 25, color: 'slateblue'}}>A closer look at my coding journey...</Typography></i>

            <div className='skills-wrapper'>
                <h2 className='skills-title'>Programming Skills</h2>
                <div className="programming-skills">
                <h3>Languages</h3>
                    JS <br></br>
                    Python <br></br>
                    HTML <br></br>
                    CSS <br></br>
                    Java
                
                </div>
                <div></div>

                <div className="programming-skills">
                <h3>Frameworks and Technologies</h3>
                    React <br></br>
                    Express <br></br>
                    MongoDB <br></br>
                    Node <br></br>
                    Git Version Control <br></br>
                    Sass/Styled Components <br></br>
                    Responsive Design
                </div>

                <div className='programming-skills'>
                <h3>Soft Skills</h3>
                Collaboration and Adaptability <br></br>
                Communication <br></br>
                Creativity <br></br>
                Emotional Intelligence
                </div>
            </div>
        </SkillsDiv>
    )
}

export default  SkillsWrapper;
