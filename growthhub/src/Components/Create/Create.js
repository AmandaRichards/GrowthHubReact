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
      let form = new FormData();

      form.append("ResourceName", name);
      form.append("ResourceSubject", subject);
      form.append("ResourceLink", link);

      let res = await fetch(`api/Resource`, {
        mode: 'no-cors',
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
      },
        body: form,
      

      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log('the name');
        console.log(name)
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
    <div className={css.page}>
    <div className={css.wrapper}>
    <h1>Add a New Resource</h1>
    <p>{name}</p>
    
    <form className={css.Form} onSubmit={handleSubmit}>
        <input  
          type="text"
          value={name}
          placeholder="Name" 
          onChange={(e) => setName(e.target.value)}
         
          className={css.field} />
        <input 
        type="text"
        value={subject}
        
        placeholder="Subject" 
        onChange={(e) => setSubject(e.target.value)}
        className={css.field} />
        <input 
        type="text"
        value={link}
        placeholder="Link" 
        onChange={(e) => setLink(e.target.value)}
        className={css.field} />
        <button type="submit" class={css.submit}>Submit</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
</div>
</div>
</>
  )
}

export default Create;



//onSubmit={handleSubmit} 



