import React, { Component } from 'react'
import { connect } from 'react-redux'
import Fact from './Fact'
import { Card } from 'semantic-ui-react'

const FactList = ({ facts }) => {

  return(
    <React.Fragment>
      <Card.Group>
        {facts.map(fact => <Fact key={fact.id} fact={fact}/>)}
      </Card.Group>
    </React.Fragment>
  )

}

function mapStateToProps(state){
  return {facts: state.facts}
}

export default connect(mapStateToProps)(FactList)
