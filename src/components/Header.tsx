import React from 'react';
import { css } from 'emotion';

export class Header extends React.Component{

    render(){
        return(
            <div className={S.header()}>
                <div className={S.headerText()}>Lamdaini Test</div>
                <div className={S.menuLink()} onClick={() => document.getElementById('about')?.scrollIntoView()}>About</div>
                <div className={S.menuLink()} onClick={() => document.getElementById('contact')?.scrollIntoView()}>Contact</div>
            </div>
        )
    }
}

const S = {
    header:() => css`
        display:flex;
        padding:10px;
        `,
    headerText:() => css`
        font-size: 4em;
        text-align: left;
        margin: 5px;
        color: hsl(199, 21%, 79%);
        margin-right:auto;
    `,
    menuLink:()=>css`
        padding:10px;
        margin:auto 0;
        font-size:12px;
        color: #bfced5;
        cursor:pointer;
        &:hover{
            background:hsl(231, 97%, 45%);
            font-size:12.5px;
            color: hsl(199, 21%, 90%);
        }
    `,
}