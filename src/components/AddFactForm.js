import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uploadFact } from '../actions'

class AddFactForm extends Component {
  state ={
    description: "",
    category: "",
    source: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state, this.props)
    this.props.uploadFact(this.state.description, this.state.category, this.state.source)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Description: <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/></label>
        <label>Category: <input type="text" name="category" value={this.state.category} onChange={this.handleChange}/></label>
        <label>Source: <input type="text" name="source" value={this.state.source} onChange={this.handleChange}/></label>
        <input type="submit" value="Add Fact" />
      </form>
    )
  }

}

export default connect(null, { uploadFact })(AddFactForm)
