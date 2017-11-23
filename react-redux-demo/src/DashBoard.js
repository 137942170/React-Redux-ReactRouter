import React from 'react'
import App from './App'
import { connect } from 'react-redux'
import { Route, Link, Redirect} from 'react-router-dom'
import { userLogout } from './login.redux'

function two() {
    return <div>two page</div>
}

@connect(
    state => state.login,
    { userLogout }
)

class DashBoard extends React.Component {
    render() {
        const match =this.props.match
        const redirectToLogin = <Redirect to='/login' />
        const app = 
                <div>
                    <div>
                        <ul>
                            <li>
                                <Link to={`${match.path}/`}>one</Link>
                            </li>
                            <li>
                                <Link to={`${match.path}/two`}>two</Link>
                            </li>
                        </ul>
                        <Route path={`${match.path}/`} exact component={App}></Route>
                        <Route path={`${match.path}/two`} component={two}></Route>
                    </div>
                <button onClick={this.props.userLogout}>注销</button>
                </div>
               return this.props.isLogin ? app:redirectToLogin 
    }
}

export default DashBoard