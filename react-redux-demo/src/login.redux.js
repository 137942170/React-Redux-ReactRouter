const LOGIN ='LOGIN'
const LOGOUT = 'LOGOUT'

export function login (state={isLogin:false,use:'fwt'}, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, isLogin:true }
        case LOGOUT:
            return { ...state, isLogin: false }
        default:
            return state
    }
}

export function userLogin (){
    return {
        type:LOGIN
    }
}

export function userLogout() {
    return {
        type: LOGOUT
    }
}