import React, { Component } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { subscribe } from '../actions'
import { connect } from 'react-redux'

const Fact = (props) => {

const handleSubscribe = () => {
  props.subscribe(props.user.id, props.fact.id)
}

// const handleUnsubscribe = () => {
//   props.unsubscribe(props.user.id, props.fact.id)
// }

const checkSubscriptionCallback = (fact) => {
  // console.log(fact)
  return (fact.id === props.fact.id)
}

const checkSubscription = () => {
  return props.user.facts.some(checkSubscriptionCallback)
}

  return (
      <Card>
        <Card.Content header={props.fact.description} />
          <a href={props.fact.source}>
            <Card.Content meta='factcheck' />
          </a>
          { checkSubscription() ? <Button className="Subscribe-button" disabled>Reminded!</Button> : <Button className="Subscribe-button" onClick={handleSubscribe}>Remind Me</Button>}
      </Card>
  )


}

const mapStateToProps = ({user: {user}}) => ({
  user
})

export default connect(mapStateToProps, { subscribe })(Fact)
