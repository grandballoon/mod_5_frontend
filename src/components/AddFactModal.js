import React from 'react'
import { Button, Header, Image, Modal, Menu } from 'semantic-ui-react'

export default class AddFactModal extends React.Component {


  render(){
    return(
      <Modal trigger={<Menu.Item  position="right" className="Subscribe-button">Add A Fact</Menu.Item>}>
        <Modal.Header>Add a Fact</Modal.Header>
      </Modal>
    )
  }


}
