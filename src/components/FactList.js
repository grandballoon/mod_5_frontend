import React, { Component } from 'react'
import { connect } from 'react-redux'
import Fact from './Fact'
import { Card } from 'semantic-ui-react'
import { syncStore, fetchCategories, fetchCurrentUser } from '../actions'
import withAuth from '../hocs/withAuth'
import SearchBar from './SearchBar'
import CategoryButton from './CategoryButton'
import Nav from './Nav'

class FactList extends Component {

  componentDidMount(){
    this.props.fetchCategories()
    this.props.fetchCurrentUser()
  }

  renderFacts = () => {
    if (this.props.searchTerm !== '') {
      return this.props.facts.filter(fact => fact.description.toLowerCase().includes(this.props.searchTerm.toLowerCase()) || fact.category.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())).map(fact => <Fact key={fact.id} fact={fact}/>)
    } else {
      return this.props.facts.map(fact => <Fact key={fact.id} fact={fact}/>)
    }
  }

  renderButtons = () => {
      if (this.props.categories !== []){
        return this.props.categories.map(category => <CategoryButton key={category.id} category={category} />)
      }
    }


  render(){
    return(
      <React.Fragment>
        <Nav />
        <div className="ui centered grid">
          <div className="ten wide column">
            <SearchBar />
          </div>
        </div>
        <div className="ui centered grid">
            {this.renderButtons()}
        </div>
        <br /> <br /> <br />
        <div className="ui centered grid">
          <p><i>Subscribe to a fact and Factoyd will text it to you on a <a href="https://www.theguardian.com/education/2016/jan/23/spaced-repetition-a-hack-to-make-your-brain-store-information">spaced repetition basis</a> to help you automate learning!</i></p>
        </div>
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
    fetchCategories: () => dispatch(fetchCategories()),
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
  }
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(FactList))
