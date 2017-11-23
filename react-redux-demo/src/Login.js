import React from 'react'
import { userLogin } from './login.redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

@connect(
    state=> state.login,
    {userLogin}
)
class Login extends React.Component {
    render() {
        return (
            <div>
                {this.props.isLogin?<Redirect to='/dashboard' />:null}
                <h1>您还没有登入,请点击登入按钮</h1>
                <button onClick={this.props.userLogin}>登入</button> 
            </div>
        )
    }
}

export default Login