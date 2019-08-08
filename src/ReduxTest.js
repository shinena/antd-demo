import React, { Component } from 'react'
// import store from './store'
import {connect} from 'react-redux'
import {add,minus,asyncAdd} from './store/counter'

// 自动渲染
// 映射到组件属性
@connect(state => ({num: state.counter}),
  { // vuex中的action
    add,minus,asyncAdd
  }
)
class ReduxTest extends Component{
  // componentDidMount(){
  //   // 订阅状态变更 
  //   store.subscribe(()=>{
  //     this.forceUpdate()
  //   })
  // }
  render(){
    return (
      <div>
      {this.props.num}
      {/*{store.getState()}*/}
        <div>
          <button onClick={()=>this.props.add(2)}>+</button>
          <button onClick={this.props.minus}>-</button>
          <button onClick={this.props.asyncAdd}>+</button>
        
          </div>
      </div>
    )
  }
}

export default ReduxTest