import React, { Component } from 'react'
import { connect } from 'react-redux'
import Fact from './Fact'
import { Card } from 'semantic-ui-react'
import { syncStore } from '../actions'
import AddFactForm from './AddFactForm'
import withAuth from '../hocs/withAuth'
import SearchBar from './SearchBar'

const FactList = (props) => {


const renderFacts = () => {
  console.log(props.facts)
    if (props.searchTerm != '') {
      return props.facts.filter(fact => fact.description.toLowerCase().includes(props.searchTerm.toLowerCase())).map(fact => <Fact key={fact.id} fact={fact}/>)
    } else {
      return props.facts.map(fact => <Fact key={fact.id} fact={fact}/>)
    }
  }

  return(
    <React.Fragment>
      <div className="ui two column centered grid">
          <div className="column">
            <SearchBar />
        </div>
      </div>
      <div className="ui sixteen column centered grid">
        <div >
          <Card.Group className="twelve column centered row" >
            {renderFacts()}
          </Card.Group>
        </div>
      </div>
    </React.Fragment>
  )

}

function mapStateToProps(state){
  return {facts: state.fact.facts, searchTerm: state.fact.searchTerm}
}

function mapDispatchToProps(dispatch) {
  return {
    syncer: () => dispatch(syncStore())
  }
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(FactList))
