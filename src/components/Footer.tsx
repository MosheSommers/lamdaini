import React from "react";
import { css } from "emotion";

export class Footer extends React.Component{
    render(){
        return<div>
                    <div className={S.footerText()}>Footer</div>
                </div>;
    }
}

const S = {
    footerText:() => css`
    font-size: 9em;
    margin: auto;
    line-height: 20vw;
    color: purple;
`
}