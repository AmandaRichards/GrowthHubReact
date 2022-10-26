import logo from './logo.svg';
import SubjectContainer from './Components/SubjectContainer/SubjectContainer';
import './App.css';
import { Component } from 'react';
import Create from './Components/Pages/Create/Create';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  return (
    <>
    <Header></Header>
    <h1>What do you want to learn today?</h1>
    <SearchBar></SearchBar>
    <SubjectContainer></SubjectContainer>
    {/* <Create></Create> */}

    </>


    
  );
}

export default App;
