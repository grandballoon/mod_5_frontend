import React from 'react'
import { Button, Header, Image, Modal, Menu, Form } from 'semantic-ui-react'
import AddFactForm from './AddFactForm'
import { uploadFact, syncStore } from '../actions'
import { connect } from 'react-redux'

class AddFactModal extends React.Component {
  state ={
    description: "",
    category: "",
    source: "",
    modalOpen: false
  }


  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  resetState = () => {
    this.setState({description: '', category: '', source: ''})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state, this.props)
    this.props.uploadFact(this.state.description, this.state.category, this.state.source)
    this.handleClose()
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false }, () => console.log(this.state))

  render(){
    return(
      <Modal trigger={<Menu.Item onClick={this.handleOpen}  position="right" className="Subscribe-button">Add A Fact</Menu.Item>}
      open={this.state.modalOpen}
      onClose={this.handleClose}
        >
        <Modal.Header>Add a Fact</Modal.Header>
        <div className="ui two column centered grid">
            <div className="column">
              <br/>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                <label>Description: <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/></label>
                </Form.Field>
                <Form.Field>
                <label>Category: <input type="text" name="category" value={this.state.category} onChange={this.handleChange}/></label>
                </Form.Field>
                <Form.Field>
                <label>Source: <input type="text" name="source" value={this.state.source} onChange={this.handleChange}/></label>
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Form>
            <br/>
          </div>
      </div>
      </Modal>
    )
  }


}

const mapDispatchToProps = dispatch => {
  return {
    syncer: () => dispatch(syncStore()),
    uploadFact: (description, category, source) => dispatch(uploadFact(description,category,source))
  }
}

export default connect(null, mapDispatchToProps)(AddFactModal)
