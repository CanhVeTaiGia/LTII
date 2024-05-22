import React, { Component } from 'react'
import Child from './Child';

interface Props{

}
interface State{
    name: string,
    age: number
    log(): void
    count: number,
    isActive: boolean
}
export default class Class extends Component<State>{
    public state: State;
    constructor(props: any) {
        super(props);
        this.state = {
            // Chứa những dữ liệu
            name: 'Hảo',
            age: 20,
            log(){
                console.log("print");
            },
            count: 1,
            isActive: true
        }
    }
    // Khi muốn thay đổi state đối vs class component thì dung this.setState
    componentWillMount(): void {
        // Thg làm gì
        // Chạy trc render cho nên ở components này tính toán lại state và props, lưu ý tg mà chuyển sang render nhanh
        console.log('Phương thức componentWillMount được gọi');
        
    }
    conponentDidMount() :void{
        // Dùng để làm gì?
        // Chạy sau khi render lần 1st các thành phần của component đc gắn vào DOM, có thể thực hiện các tương tác với DOM, noi lí tưởng để callAPI lấy data render ra component
        console.log('Phương thức componentDidMount được gọi');
    }
    shouldComponentUpdate(nextProps: Readonly<State>, nextState: Readonly<{}>, nextContext: any): boolean {
        // 
        console.log("Phương thức shouldComponentUpdate được gọi");
        
        return true
    }
    componentWillUpdate(nextProps: Readonly<State>, nextState: Readonly<{}>, nextContext: any): void {
        // Chạy trc re-render nên cx có thế dùng để tính toán lại state hoặc props
        console.log("Phương thức componentWillUpdate được gọi");
        
    }
    componentDidUpdate(prevProps: Readonly<State>, prevState: Readonly<{}>, snapshot?: any): void {
        // Chạy sau khi re-render các phần tử component được gắn kết vào DOM có thể dùng để tương tác với DOM
        console.log("Phương thức componentDidUpdate được gọi");
    }
    click = () =>{
        this.setState(
            {count: this.state.count + 1}
        )
        this.setState(
            {isActive: !this.state.isActive}
        )
    }
    render() {
        console.log("component re-render đc gọi");
        // Không được setState ở đây
        
        return (
            <>
                
                {/* 4 Giai đoạn:
                    1. Initial (khởi tạo)
                        - Khởi tạo state, props
                    2. Mounting (Gắn vào, thêm vào)
                        - Cung cấp phương thức mặc định (có sẵn) sau khi khởi tạo -> componentWillMount() -> components render() -> conponentDisMount()
                    3. Update (Thay đổi)
                    3.1. Updating (Cập nhật)
                        - Xảy ra khi state hoặc props thay đổi thì chạy và giai đoạn này
                            + state thay đổi -> updating
                        - Cung cấp các phương thước
                            + shouldComponentUpdate -> true / false (Mặc định là true) -> cho phép updating
                            + componentWillUpdate
                            + componentDidUpdate
                    4. Unmounting (Gỡ bỏ, xóa bỏ)
                    - Xóa bỏ khỏi DOM
                        - componetWillUnmount
                */}
                <p>{this.state.count}</p>
                {this.state.isActive? <Child></Child> : ''}
                <button onClick={this.click}>Count</button>
            </>
        )
    }
}
