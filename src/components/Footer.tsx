import React from "react";
import { css } from "emotion";

export class Footer extends React.Component{
    render(){
        return<div className={S.footer()}>
                    <div className={S.footerText()}>Footer</div>
                </div>;
    }
}

const S = {
    footer:()=> css`
        height:20vh;
        background-color:hsla(0, 6%, 13%, 0.1);;
    `,
    footerText:() => css`
    font-size: 9em;
    margin: auto;
    line-height: 20vw;
    color: purple;
`
}