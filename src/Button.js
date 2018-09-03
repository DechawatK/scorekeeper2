import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { onClick, text } = this.props
    return (
      <div>
        <button onClick={onClick}>{text}</button>
      </div>
    )
  }
}
