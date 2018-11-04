import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import { subscribe } from '../actions'
import { connect } from 'react-redux'

class Fact extends Component {
constructor(props) {
  super(props)
  this.state = {loading: false}
}


handleSubscribe = () => {
  this.setState({loading: true})
  this.props.subscribe(this.props.user.id, this.props.fact.id)
}

checkSubscriptionCallback = (fact) => {
  return (fact.id === this.props.fact.id)
}

buttonWithLoader = () => {
  if (!this.state.loading) {
    return <Button style={{backgroundColor: "#F26157", color: "white"}} className="Subscribe-button" onClick={this.handleSubscribe}>Remind Me</Button>
  } else if (this.state.loading) {
    return <Button style={{backgroundColor: "#F26157", color: "white"}} className="ui loading button" />
  }

}

checkSubscription = () => {
  // this.props.user ? 
  this.props.user.facts.some(this.checkSubscriptionCallback)
   // : null
}
 render () {
   console.log(this.props.user ? "yes user" : "no user")
   console.log("check subscription returns:")
   console.log(this.checkSubscription())
   return (
     <Card>
       <Card.Content header={this.props.fact.description} />
       <a href={this.props.fact.source}>
         <Card.Content meta='factcheck' />
       </a>
       { this.checkSubscription() ? <Button style={{backgroundColor: "#F26157", color: "white"}} disabled>Reminded!</Button> : this.buttonWithLoader() }
     </Card>
   )
 }


}

const mapStateToProps = ({user: {user}}) => ({
  user
})

export default connect(mapStateToProps, { subscribe })(Fact)
