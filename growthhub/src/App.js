
import SubjectContainer from './Components/SubjectContainer/SubjectContainer';
import './App.css';
import { Component } from 'react';
// import Create from './Components/Create/Create';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import NavBar from './Components/NavBar/NavBar';
import {useEffect, useState} from 'react';
import Resource from './Components/Resource/Resource';
import SubjectPage from './Components/UXDesignPage/UXDesignPage';
import ResourceContainer from './Components/ResourceContainer/ResourceContainer';


function App() {
const [search, setSearch] = useState("");
const [subject, setSubject] = useState("");


function handleClick(){
  setSearch(subject)
  console.log(search)
  
}
function handleChange(e){
  setSearch("")
  setSubject(e.target.value)
}

  return (
      <>
      <Header></Header>
      
      <h1>What do you want to learn today?</h1>
      <SearchBar handleChange={handleChange} handleClick={handleClick}></SearchBar>
   
{search?  <ResourceContainer subject={search} ></ResourceContainer> 
     : 
    
     <SubjectContainer></SubjectContainer>}
    </>
     )
}
   


export default App;
