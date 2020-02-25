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
        max-height:50vh;
    `,
    containerText:() => css`
        font-size: 7em;
        margin: auto;
        line-height: 50vh;
        color: #231f1f;
    `

}