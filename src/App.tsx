import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainContainer } from './components/MainContainer';
import { Background } from './components/Background';
import { Contact } from './components/Contact';
import { Banner } from './components/Banner';


const App = () => {
  return (
    <div className={`App`}>
      <Background />
      <Header />
      <Banner />
      <MainContainer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
