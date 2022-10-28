import React from 'react'
import ResourceContainer from '../ResourceContainer/ResourceContainer'
import Header from '../Header/Header'

const UXDesignPage = ({topic}) => {
  return (
    <div>
      
        <Header></Header>
        <h1>UX Design</h1>
        <ResourceContainer subject={'UX Design'}/>
    </div>
  )
}

export default UXDesignPage