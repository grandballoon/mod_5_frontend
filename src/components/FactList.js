import React, { Component } from 'react'
import { connect } from 'react-redux'
import Fact from './Fact'
import { Card } from 'semantic-ui-react'
import { syncStore } from '../actions'

const FactList = ({ facts }) => {

  const renderFacts = () => {
    return (
      {facts.map(fact => <Fact key={fact.id} fact={fact}/>)}
    )
  }

  return(
    <React.Fragment>
      <Card.Group>
        {facts ? renderFacts() : null }
      </Card.Group>
    </React.Fragment>
  )


}

function mapStateToProps(state){
  console.log(state)
  return {facts: state.facts}
}



export default connect(mapStateToProps)(FactList)
