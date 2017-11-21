import React from 'react';
import { connect } from 'react-redux'
import { add, reduce, addNumAsync} from './index.redux'

@connect(
  state => ({ num: state }),
  { add, reduce, addNumAsync}
)

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
           <p>现在的数量是{this.props.num}个</p>
           <button onClick={this.props.add}>数量增加</button>
           <button onClick={this.props.reduce}>数量减少</button>
          <button onClick={this.props.addNumAsync}>延迟两秒增加</button>
        </header> 
      </div>
    );
  }
}

export default App;
