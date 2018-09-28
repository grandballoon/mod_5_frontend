import React from 'react'
import { enterSearch } from '../actions'
import { Input, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AddFactModal from './AddFactModal'
class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {searchBarText: ''}
  }

  handleType = (event) => {
    this.setState({searchBarText: event.target.value}, () => this.props.enterSearch(this.state.searchBarText))
  }

  render(){
    return(

      <Input fluid placeholder="Learn Something New" onChange={this.handleType} value={this.state.searchBarText} />


    )
  }

}

export default connect(null, { enterSearch })(SearchBar)
