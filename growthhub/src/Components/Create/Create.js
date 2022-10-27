import React from 'react'
import css from './Create.module.css';
import Header from '../Header/Header';
import {useState} from 'react';

function Create () {

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`api/Resource`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          resourceName: name,
          resourceSubject: subject,
          resourceLink: link, 
        }),
      

      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setSubject("");
        setLink("");
        setMessage("Resource created successfully");
        console.log(resJson);
        
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <Header></Header>
    <div class={css.page}>
    <div class={css.wrapper}>
    <h1>Add a New Resource</h1>
    
    <form class={css.Form} onSubmit={handleSubmit}>
        <input  
          type="text"
          value={name}
          placeholder="Name" 
          onChange={(e) => setName(e.target.value)}
          class={css.field} />
        <input 
        type="text"
        value={subject}
        placeholder="Subject" 
        onChange={(e) => setSubject(e.target.value)}
        class={css.field} />
        <input 
        type="text"
        value={link}
        placeholder="Link" 
        onChange={(e) => setLink(e.target.value)}
        class={css.field} />
        <button type="submit" onSubmit={handleSubmit} class={css.submit}>Submit</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
</div>
</div>
</>
  )
}

export default Create;







