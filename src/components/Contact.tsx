import React from 'react';
import { css } from 'emotion';
import phone from './icons8.png'; // 
import email from './icons8-email.png'; // 

export const Contact = () => (
    <div id='contact' className={S.contactContainer()}>
        <div className={S.contactText()}>Contact</div>
        <a href={'tel:800-lamdaini'} className={S.links()}><img className={S.icon(32)} src={phone} /> <div className={S.address()}>800-lamdaini</div></a>
        <a href={'mailto:info@lamdaini.com'}  className={S.links()}><img className={S.icon(45)} src={email} /> <div className={S.address()}>info@lamdaini.com</div></a>
    </div>
);

const S = {
    contactContainer:() => css`
        background-color:hsla(199, 21%, 79%, 0.9);
        color: #231f1f;

    `,
    contactText:() => css`
        font-size: 6em;
        margin: auto;
    `,
    icon:(size:number)=>css`height: ${size}px;`,
    address:() => css`margin-left: 10px;`,
    links:()=> css`
        display:flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #231f1f;
        margin: auto;
        width: max-content;
    `,

}