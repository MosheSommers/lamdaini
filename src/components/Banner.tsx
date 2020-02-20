import React from 'react';
import { css } from 'emotion';

export const Banner = () => (
    <div className={S.bannerContainer()}>
        <div className={S.bannerText()}>Banner</div>
    </div>
);

const S = {
    bannerContainer:() => css`
        height:30vh;
        background-color:#fff;
    `,
    bannerText:() => css`
        font-size: 6em;
        margin: auto;
        line-height: 30vw;
        color: #231f1f;
    `
}