import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Create from './Components/Create/Create';
import SubjectPage from './Components/SubjectPage/SubjectPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    {/* <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create">About Us</Link>
              </li>
              <li>
                <Link to="/subject">Contact Us</Link>
              </li>
            </ul> */}
      <Routes>
        <Route path="/" element={<App />}></Route>
          {/* <Route index element={<Home />} /> */}
          <Route path="/create" element={<Create />} ></Route>
          <Route path="/subject" element={<SubjectPage />} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
