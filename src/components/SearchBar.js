import React from 'react'
import { enterSearch } from '../actions'
import { Input, Grid } from 'semantic-ui-react'

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {searchBarText: ''}
  }

  handleType = (event) => {
    console.log(event.target)
    this.setState({searchBarText: event.target.value})
  }

  render(){
    return(

      <Input fluid placeholder="Learn Something New" onChange={this.handleType} value={this.state.searchBarText} />

    )
  }

}

export default SearchBar
