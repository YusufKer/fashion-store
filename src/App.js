import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
//Importing Components
import Header from './components/header/Header'
import Homepage from "./components/homepage/Homepage"
import DetailedCard from "./components/cards/DetailedCard"

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/"><Homepage/></Route>
        <Route path="/test"><DetailedCard/></Route>
      </Switch>
      
    </div>
  );
}

export default App;
