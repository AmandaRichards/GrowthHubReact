import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Create from './Components/Create/Create';
import SubjectPage from './Components/UXDesignPage/UXDesignPage';
import UXDesignPage from './Components/UXDesignPage/UXDesignPage';
import SoftwareEngineering from './Components/SoftwareEngineering/SoftwareEngineering';
import Consultancy from './Components/Consultancy/Consultancy';
import DevOps from './Components/DevOps/DevOps';
import Mindset from './Components/Mindset/Mindset';
import UserResearch from './Components/User Research/UserResearch';
import Testing from './Components/Testing/Testing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<App />}></Route>
          {/* <Route index element={<Home />} /> */}
          <Route path="/create" element={<Create />} ></Route>
          <Route path="/all resources" element={<SubjectPage />} ></Route>
          <Route path="/UX Design" element={<UXDesignPage />} ></Route>
          <Route path="/Software Engineering" element={<SoftwareEngineering />} ></Route>
          <Route path="/Consultancy" element={<Consultancy />} ></Route>
          <Route path="/DevOps" element={<DevOps />} ></Route>
          <Route path="/Mindset" element={<Mindset />} ></Route>
          <Route path="/User Research" element={<UserResearch />} ></Route>
          <Route path="/Testing" element={<Testing />} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
