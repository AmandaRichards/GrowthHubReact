import React from 'react'
import ResourceContainer from '../ResourceContainer/ResourceContainer'
import Header from '../Header/Header'

const UserResearch = ({topic}) => {
  return (
    <div>
      
        <Header></Header>
        <h1>UserResearch</h1>
        <ResourceContainer subject={'User Research'}/>
    </div>
  )
}

export default UserResearch