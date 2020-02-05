import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainContainer } from './components/MainContainer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
