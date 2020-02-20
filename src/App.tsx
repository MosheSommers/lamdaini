import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainContainer } from './components/MainContainer';
import { css } from 'emotion';
import background from './background.jpg'; // Tell Webpack this JS file uses this image


const App = () => {
  return (
    <div className={`App ${S.fullPage()}`}>
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;


const S = {
  fullPage:() => css`
      background-color:purple;
      background:url(${background});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  `

}
