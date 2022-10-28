import React from 'react'
import {Link} from "react-router-dom";
import HeaderLink from '../NavLink/NavLink';
import css from './Subject.module.css';
import { useState } from 'react';
const Subject = ({Id, IconURL, Title, page}) => {

  // const [subject, setSubject] = useState("");
  // function handleClick(){
  //   setSubject({Title})

  // }

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       `api/Resource/search/${subject}`
  //     );
  //     const data = await response.json();
  //     setResources(data.data);
  //   }
  //   fetchData();
  // }, []);
  return (
  <>
     
     <div className={css.fade}>
    <div className={css.subjectCard} key={Id}>
    <img src={IconURL} />
    <button className={css.h33} ><HeaderLink page={page}></HeaderLink></button>
    
    
</div>
</div>


</>

  )
}

export default Subject

//onClick={handleClick}