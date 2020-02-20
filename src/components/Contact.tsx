import React from 'react';
import { css } from 'emotion';

export const Contact = () => (
    <div id='contact' className={S.contactContainer()}>
        <div className={S.contactText()}>Contact</div>
    </div>
);

const S = {
    contactContainer:() => css`
        height:80vh;
        background-color:#fff;
    `,
    contactText:() => css`
        font-size: 6em;
        margin: auto;
        line-height: 80vw;
        color: #231f1f;
    `
}