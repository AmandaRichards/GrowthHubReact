import React from 'react'
import {Link} from "react-router-dom";
import css from './Subject.module.css';

const Subject = ({Id, IconURL, Title, Link}) => {
  return (
    <a href={Link}>
     <div class={css.fade}>
    <div class={css.subjectCard} key={Id}>
    <img src={IconURL} />
    <h3>{Title}</h3>
</div>
</div> 
</a>
  )
}

export default Subject