import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

const Fact = (props) => {

  const disputed = () =>{
    return(
      `${props.fact.disputes.length} disputes`
    )
  }


  return (
    <Card>
        <Card.Content header={props.fact.description} />
        <Card.Content extra>
          <Card.Content>
          <a href={props.fact.source}>
            <Card.Content meta='source' />
          </a>
        </Card.Content>
          {props.fact.verified ? 'verified' : disputed()}
      </Card.Content>
    </Card>
  )


}

export default Fact
