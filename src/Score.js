import React, { Component } from 'react'

export default class Score extends Component {
  render() {
    const { value } = this.props

    return (
      <div className="score">
        {value}
        <h4>Your score</h4>
      </div>
    )
  }
}
