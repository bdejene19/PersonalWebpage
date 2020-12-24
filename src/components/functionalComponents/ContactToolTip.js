import React from 'react';
import styled from 'styled-components';

const ImmediateContactWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 100px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        top: 120%;
        left: 50%;
        margin-left: -60px;
    }

    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: 0px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent black transparent;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
    }

    .contact-icon {
        display: inline;
        cursor: pointer;
        width: 40px;
        height: 40px;
    }
`;

export default function ContactToolTip() {
    return (
        <ImmediateContactWrapper>
            <div className="tooltip">
                <span className="tooltiptext">LinkedIn</span>
                <a href="https://www.linkedin.com/in/bemnet-dejene-8663521b1/"><img src="https://cdn2.iconfinder.com/data/icons/on-point-social-media/141/LinkedIn-512.png" alt="LinkedIn" className="contact-icon"></img></a>

            </div>
            <div className="tooltip">
                <span className="tooltiptext">GitHub</span>
                <a href="https://github.com/bdejene19"><img src="https://newslibre.com/wp-content/uploads/2018/06/Microsoft-to-Acquire-GitHub-Newslibre-920x425.png" alt="Github" className="contact-icon"></img></a>

            </div> 

        </ImmediateContactWrapper>
            
            
    )
}
