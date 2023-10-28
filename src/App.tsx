import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';


function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
