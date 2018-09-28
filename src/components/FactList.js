import React, { Component } from 'react'
import { connect } from 'react-redux'
import Fact from './Fact'
import { Card } from 'semantic-ui-react'
import { syncStore } from '../actions'
import AddFactForm from './AddFactForm'
import withAuth from '../hocs/withAuth'
import SearchBar from './SearchBar'

const FactList = ({ facts }) => {



  const renderFacts = () => {
    return(
      facts.map(fact => <Fact key={fact.id} fact={fact}/>)
    )
  }

  return(
    <React.Fragment>
      <div class="ui two column centered grid">
      <div class="column">
      <SearchBar />
      </div>
      <Card.Group>
        {facts ? renderFacts() : <p>hello</p>}
      </Card.Group>
      <AddFactForm />
      </div>
    </React.Fragment>
  )

}

function mapStateToProps(state){
  return {facts: state.fact.facts}
}

function mapDispatchToProps(dispatch) {
  return {
    syncer: () => dispatch(syncStore())
  }
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(FactList))
