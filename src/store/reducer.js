import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DETELE_TODO_ITEM} from './actionTypes';

const defaultState =  {
    inputValue: '123',
    list: [1, 2]
}

// reducer 可以接收state, 但是绝不能修改state
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        //深复制=>不可变数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        //深复制=>不可变数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DETELE_TODO_ITEM){
        //深复制=>不可变数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    console.log(state, action);
    return state;
}