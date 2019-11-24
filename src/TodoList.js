import React, { Component } from 'react';
import store from './store/index';
import { getInputChangeAction, getAddItemAction, getDeteleItemAction} from './store/actionCreators';
import TodoListUI from './TodoListUI'
import Axios from 'axios';
// const list = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

// 容器组件(也叫智能组件)
class TodoList extends Component {

    constructor(props){
        super(props);
        //console.log(store.getState());
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDeleteClick= this.handleDeleteClick.bind(this);
        // 订阅store的数据变化
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render () {
        return  <TodoListUI 
                    inputValue={this.state.inputValue}
                    handleInputChange={this.handleInputChange}
                    handleBtnClick={this.handleBtnClick}
                    list={this.state.list}
                    handleDeleteClick={this.handleDeleteClick}
                />
    }

    componentDidMount(){
        console.log("11111111")
        Axios.get('/userinfo').then((res) =>{
            console.log("11");
        })
    }
    
    handleInputChange(e){
        //console.log(e.target.value)
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange(){
        //console.log('StoreChange');
        this.setState(store.getState());
    }

    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleDeleteClick(index){
        //console.log(index);
        // const action = {
        //     type: DETELE_TODO_ITEM,
        //     index
        // }
        const action = getDeteleItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList