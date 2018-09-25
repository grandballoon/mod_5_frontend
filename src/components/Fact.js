import React, { Component } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { subscribe, unsubscribe } from '../actions'
import { connect } from 'react-redux'

const Fact = (props) => {

const handleSubscribe = () => {
  props.subscribe(props.user.id, props.fact.id)
}

const handleUnsubscribe = () => {
  props.unsubscribe(props.user.id, props.fact.id)
}

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
        <Card.Content extra>
          <Card.Content>
          <a href={props.fact.source}>
            <Card.Content meta='source' />
          </a>

          { checkSubscription() ? <Button color="red" onClick={handleUnsubscribe}>Unsubscribe</Button> : <Button color="green"  onClick={handleSubscribe}>Subscribe</Button>}

        </Card.Content>
          {props.fact.verified ? 'verified' : null}
      </Card.Content>
    </Card>
  )


}

const mapStateToProps = ({user: {user}}) => ({
  user
})

export default connect(mapStateToProps, { subscribe, unsubscribe })(Fact)
