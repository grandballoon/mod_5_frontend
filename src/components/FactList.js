import React, { Component } from 'react'
import { connect } from 'react-redux'
import Fact from './Fact'
import { Card, Button } from 'semantic-ui-react'
import { syncStore, fetchCategories } from '../actions'
import AddFactForm from './AddFactForm'
import withAuth from '../hocs/withAuth'
import SearchBar from './SearchBar'
import CategoryButton from './CategoryButton'

class FactList extends Component {

  componentDidMount(){
    this.props.fetchCategories()
  }

  renderFacts = () => {
    if (this.props.searchTerm != '') {
      return this.props.facts.filter(fact => fact.description.toLowerCase().includes(this.props.searchTerm.toLowerCase()) || fact.category.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())).map(fact => <Fact key={fact.id} fact={fact}/>)
    } else {
      return this.props.facts.map(fact => <Fact key={fact.id} fact={fact}/>)
    }
  }

  renderButtons = () => {
      if (this.props.categories != []){
        return this.props.categories.map(category => <CategoryButton category={category} />)
      }
    }


  render(){
    return(
      <React.Fragment>
        <div className="ui centered grid">
          <div className="ten wide column">
            <SearchBar />
          </div>
        </div>
        <div className="ui centered grid">
          <div ten wide column>
            {this.renderButtons()}
          </div>
        </div>
        <br /> <br /> <br />
        <div className="ui sixteen column centered grid">
          <div >
            <Card.Group className="twelve column centered row" >
              {this.renderFacts()}
            </Card.Group>
          </div>
        </div>
      </React.Fragment>
    )
  }

}

function mapStateToProps(state){
  return {facts: state.fact.facts, searchTerm: state.fact.searchTerm, categories: state.fact.categories}
}

function mapDispatchToProps(dispatch) {
  return {
    syncer: () => dispatch(syncStore()),
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(FactList))
