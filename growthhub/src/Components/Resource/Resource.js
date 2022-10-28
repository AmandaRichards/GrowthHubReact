import React from 'react'
import css from './Resource.module.css';
import {useState} from 'react';

const Resource = ({ Name, Link, Id}) => {

  const [message, setMessage] = useState("")

  let handleClick = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`api/Resource/${Id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json/'
      },
        

      });
      let resJson = await res.json();
      if (res.status === 200) {
      
        setMessage("Resource deleted successfully");
        console.log(resJson);
        
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  let onClick = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`api/Resource/${Id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json/'
      },
        

      });
      let resJson = await res.json();
      if (res.status === 200) {
      
        setMessage("Resource updated successfully");
        console.log(resJson);
        
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class={css.Resource}>
    
    <a href={Link} target="_blank" ><h3 class={css.resourcetitle}>{Name}</h3></a>
    <button className={css.submitButton} type="submit" onClick={handleClick}>Delete</button>
    <button className={css.submitButton} type="submit" onClick={onClick}>Update</button>

    <div className="message">{message ? <p>{message}</p> : null}</div>
</div>
  )
}

export default Resource;