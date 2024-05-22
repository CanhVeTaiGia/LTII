import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(): void {
        // Khi phần tử xóa khỏi DOM thg đc dùng để clear time out... xóa khỏi bộ nhớ
        console.log('Phương thức componentWillUnmount được gọi');
    }
    render() {
        return (
            <div>Child</div>
        )
    }
}
