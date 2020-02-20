import React from 'react';
import { css } from 'emotion';
import background from '../background.jpg'; // Tell Webpack this JS file uses this image


export const Background = () => {
    return <div className={S.background()}></div>
}

const S = { 
    background:() => css`
        background:url(${background});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: fixed;
        height: 102vh;
        width: 100vw;
        z-index: -1;
    `
}