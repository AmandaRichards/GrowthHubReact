import React from 'react'
import css from './Create.module.css';
//import Header from './Header/Header';

const Create = () => {
  return (
    <>
    {/* <Header></Header> */}
    <h1>Add a New Resource</h1>
    <div class={css.wrapper}>
    <form class={css.Form}>
        <input placeholder="Name" class={css.field} />
        <input placeholder="Subject" class={css.field} />
        <input placeholder="Category" class={css.field} />
        <input placeholder="Link" class={css.field} />
        <button class={css.submit}>Submit</button>
    </form>
</div>
</>
  )
}

export default Create;




