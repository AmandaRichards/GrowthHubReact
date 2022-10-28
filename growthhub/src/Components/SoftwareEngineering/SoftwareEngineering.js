import React from 'react'
import ResourceContainer from '../ResourceContainer/ResourceContainer'
import Header from '../Header/Header'

const SoftwareEngineering = ({topic}) => {
  return (
    <div>
      
        <Header></Header>
        <h1>Software Engineering</h1>
        <ResourceContainer subject={'Software Engineering'}/>
    </div>
  )
}

export default SoftwareEngineering;