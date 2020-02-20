import React from 'react';
import { css } from 'emotion';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export class Header extends React.Component{

    render(){
        return(
            <div id='top' className={S.header()}>
                <div className={S.headerText()}>Lamdaini Test</div>
                <Link className={S.menuLink()} smooth={true} to="about">About</Link>
                <Link className={S.menuLink()}  smooth={true}  to="contact">Contact</Link>
                <Link className={S.backToTop()}  smooth={true}  to="top">Back to top</Link>
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
    backToTop:() => css`
        position: fixed;
        bottom: 20px;
        right: 20px;
        color:#eee;
        background: #333;
        padding: 20px;
    `,
}