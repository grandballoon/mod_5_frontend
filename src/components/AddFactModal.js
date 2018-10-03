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

  options = [{key: 1, text: "Science", value: "Science"}, {key: 2, text: "History", value: "History"}, {key: 3, text: "Entertainment", value: "Entertainment"}, {key: 4, text: "Culture", value: "Culture"}, {key: 5, text: "Politics", value: "Politics"}]


  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleDropDownChange = (e, data) => this.setState({category: data.value}, () => console.log(this.state))

  resetState = () => {
    this.setState({description: '', category: '', source: ''})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.uploadFact(this.state.description, this.state.category, this.state.source)
    this.setState({description: '', category:'', source:''})
    this.handleClose()
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false }, () => console.log(this.state))

  render(){
    return(
      <Modal trigger={<Menu.Item onClick={this.handleOpen}  position="right" >Add A Fact</Menu.Item>}
      open={this.state.modalOpen}
      onClose={this.handleClose}
        >
        <Modal.Header>Add a Fact</Modal.Header>
        <div className="ui two column centered grid">
            <div className="column">
              <br/>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input label="Description:" placeholder="Bees communicate by dancing" type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                <Form.Select label="Category:" name="category" options={this.options} value={this.state.category} onChange={this.handleDropDownChange}/>
                <Form.Input label="Source:" placeholder="Verifying is very fine...ing" type="text" name="source" value={this.state.source} options={this.options} onChange={this.handleChange}/>
                <Button type="submit">Submit</Button>
              </Form>
            <br/>
          </div>
      </div>
      </Modal>
    )
  }


}

const mapStateToProps = state => {
  return {categories: state.fact.categories}
}

const mapDispatchToProps = dispatch => {
  return {
    syncer: () => dispatch(syncStore()),
    uploadFact: (description, category, source) => dispatch(uploadFact(description,category,source))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFactModal)
