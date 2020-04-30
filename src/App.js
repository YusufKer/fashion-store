import React from 'react';
import './App.css';
//Importing Components
import Header from './components/header/Header'
import Homepage from "./components/homepage/Homepage"

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
    </div>
  );
}

export default App;
