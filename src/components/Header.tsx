import React from 'react';
import { css } from 'emotion';
import background from './background.jpeg'; // Tell Webpack this JS file uses this image


export class Header extends React.Component{

    render(){
        return<div className={S.header()}><div className={S.headerText()}>Lamdaini</div></div>
    }
}

const S = {
    header:() => css`
        background:url(${background});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height:30vh;
        `,
    headerText:() => css`
        font-size: 14em;
        margin: auto;
        line-height: 30vw;
        color: #800080;
    `
}