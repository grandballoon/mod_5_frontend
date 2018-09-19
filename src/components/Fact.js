import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

const Fact = (props) => {



  return (
    <Card>
        <Card.Content header={props.fact.description} />
        <Card.Content meta=<a>{props.fact.source}</a> />
        <Card.Content exta>
          {props.fact.disputes.length} disputes
          {props.fact.verified ? 'verified' : 'not verified'}
      </Card.Content>
    </Card>
  )


}

export default Fact
