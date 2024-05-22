import React, { Component } from 'react'
interface ClassComponent{
    test: number[];
}

export default class Class extends Component<ClassComponent>{
  render() {
    return (
      <>
        {this.props.test.map((item, index) =>{
            return <p key={index}>{item}</p>
        })}
      </>
    )
  }
}
