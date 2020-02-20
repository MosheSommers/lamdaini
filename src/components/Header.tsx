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
                <div className={S.menuLink()}   onClick={ () => window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=PQESWX2BA2Y66&currency_code=USD&source=url")}>Donate</div>
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
        padding:20px;
        margin:auto 0.5px;
        font-size:12px;
        color: #bfced5;
        cursor:pointer;
        background:hsl(231, 97%, 25%);
        &:hover{
            background:hsl(231, 97%, 15%);
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
        &:hover{
            padding: 21px;
            cursor: pointer;
        }
    `,
}