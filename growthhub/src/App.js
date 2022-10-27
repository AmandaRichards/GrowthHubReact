import logo from './logo.svg';
import SubjectContainer from './Components/SubjectContainer/SubjectContainer';
import './App.css';
import { Component } from 'react';
// import Create from './Components/Create/Create';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  return (
    <>
    <Header></Header>
    <h1>What do you want to learn today?</h1>
    <SearchBar></SearchBar>
    <SubjectContainer></SubjectContainer>
   

    </>


    
  );
}

export default App;
