import React from 'react';
import { css } from 'emotion';

export class Header extends React.Component{

    render(){
        return(
            <div className={S.header()}>
                <div className={S.headerText()}>Lamdaini</div>
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
        color: #800080;
        margin-right:auto;
    `,
    menuLink:()=>css`
        padding:10px;
        margin:auto 0;
        font-size:12px;
        color: hsla(246, 57%, 76%, 1);
        cursor:pointer;
        &:hover{
            background:hsl(231, 97%, 45%);
            font-size:12.5px;
        }
    `,
}