const ADD = 'ADD'
const REDUCE = 'REDUCE'

export function counter (state=0, action) {
    switch (action.type) {
        case ADD:
            return state +1
        case REDUCE:
            return state -1
        default:
            return 10;
    }
}

export function add() {
    return {type:ADD}
} 

export function reduce() {
    return {type: REDUCE}
}

export function addNumAsync() {
    // thunk插件作用，这里返回函数
    return dispatch=>{
        setTimeout(
            () => { dispatch(add());
        }, 2000);
    };

}