import React, { Component } from 'react'

export default class Class extends Component {
    handleClick = () =>{
        console.log('hi');
    }
    handleDelete = (value: any) =>{
        console.log(value);
    }
    render() {
        return (
            <>
                {/* <h1 onClick={() => this.handleDelete(5)}>Class Component</h1>
                <button onClick={this.handleClick}>Click</button>
                 */}
            </>
    )
    }
}
