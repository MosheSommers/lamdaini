import React from "react";
import { css } from "emotion";


export class MainContainer extends React.Component{
    render(){
        return(
            <div id='about' className={S.mainContainer()}>
                <div className={S.containerText()}>MainContainer</div>
            </div>
        )
    }
}

const S = {
    mainContainer:() => css`
        height:80vh;
        background-color:hsla(300, 100%, 25%, 0.5);;
    `,
    containerText:() => css`
        font-size: 9em;
        margin: auto;
        line-height: 80vw;
        color: #231f1f;
    `

}