import React from 'react'
import ResourceContainer from '../ResourceContainer/ResourceContainer'
import Header from '../Header/Header'

const Testing = ({topic}) => {
  return (
    <div>
      
        <Header></Header>
        <h1>Testing</h1>
        <ResourceContainer subject={'Testing'}/>
    </div>
  )
}

export default  Testing