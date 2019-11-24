import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Input, Button, List } from 'antd';

//无状态组件，是一个函数，不存在生命周期 性能高
const TodoListUI = (props)=> {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <div>
                <Input 
                    placeholder="todo info" 
                    value={props.inputValue} 
                    style={{width: '300px', marginRight: '10px'}} 
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
                <List
                    style={{width: '300px', marginTop: '10px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item onClick={(index)=>{props.handleDeleteClick(index)}}>{item}</List.Item>)}
                />
            </div>
        </div>
    )
}
//UI组件(也叫傻瓜组件) 是一个js的类 有完整的生命周期
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{marginTop: '10px', marginLeft: '10px'}}>
//                 <div>
//                     <Input 
//                         placeholder="todo info" 
//                         value={this.props.inputValue} 
//                         style={{width: '300px', marginRight: '10px'}} 
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                     <List
//                         style={{width: '300px', marginTop: '10px'}}
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => (<List.Item onClick={(index)=>{this.props.handleDeleteClick(index)}}>{item}</List.Item>)}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

export default TodoListUI