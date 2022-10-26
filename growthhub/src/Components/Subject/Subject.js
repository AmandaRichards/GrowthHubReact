import React from 'react'
import css from './Subject.module.css';

const Subject = ({Id, IconURL, Title}) => {
  return (
    <div class={css.subjectCard} key={Id}>
    <img src={IconURL} />
    <h3>{Title}</h3>
</div>
  )
}

export default Subject