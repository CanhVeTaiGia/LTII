import React, { Component } from 'react'

interface StateClassComponent {
  name: string,
  age: number,
  address: {
    city: string,
    country: string
  }
  count: number
}
export default class StateClass extends Component <any, StateClassComponent>{
  constructor(props: StateClassComponent) {
    super(props);
    this.state = {
      name: "Hải",
      age: 14,
      address: {
        city: "Hải Phòng",
        country: "Việt Nam"
      },
      count: 1
    }
  }
  handleClick = () => {
    this.setState({
      count:this.state.count + 1
    });
  }
  render() {
    return (
      <>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.address.city}</p>
        <p>{this.state.address.country}</p>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Tăng</button>
      </>
    )
  }
}
