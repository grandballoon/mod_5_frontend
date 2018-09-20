import React, { Component } from 'react'
import { connect } from 'react-redux'
import Fact from './Fact'
import { Card } from 'semantic-ui-react'
import { syncStore } from '../actions'

const FactList = ({ facts }) => {

  const renderFacts = () => {
    return(
      facts.map(fact => <Fact key={fact.id} fact={fact}/>)
    )
  }

  return(
    <React.Fragment>
      <Card.Group>
        {facts ? renderFacts() : <p>hello</p>}
      </Card.Group>
    </React.Fragment>
  )

}

function mapStateToProps(state){
  console.log(state)
  return {facts: state.facts}
}

function mapDispatchToProps(dispatch) {
  return {
    syncer: () => dispatch(syncStore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FactList)
