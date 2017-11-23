const ADD = 'ADD'
const REDUCE = 'REDUCE'
const TEST = 'TEST'
export function counter (state=0, action) {
    switch (action.type) {
        case TEST: 
        case ADD:
            return state +1
        case REDUCE:
            return state -1
        default:
            return 10;
    }
}


export function test() {
    console.log(test)
    return {
        type: TEST
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