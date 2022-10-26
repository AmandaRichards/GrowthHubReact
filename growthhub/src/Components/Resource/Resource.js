import React from 'react'
import css from './Resource.module.css'

const Resource = ({ Name, Link}) => {
  return (
    <div class={CSS.Resource}>
    
    <a href={Link} ><h3>{Name}</h3></a>
</div>
  )
}

export default Resource;