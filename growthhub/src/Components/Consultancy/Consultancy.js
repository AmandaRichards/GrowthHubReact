import React from 'react'
import ResourceContainer from '../ResourceContainer/ResourceContainer'
import Header from '../Header/Header'

const Consultancy = ({topic}) => {
  return (
    <div>
      
        <Header></Header>
        <h1>Consultancy</h1>
        <ResourceContainer subject={'Consultancy'}/>
    </div>
  )
}

export default Consultancy