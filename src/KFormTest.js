import React, { Component } from 'react'
import {Form, Icon, Input, Button } from 'antd'

function KFormCreate(Comp) {
  return class extends Component{
    constructor(props){
      super()
      this.options = {}
      this.state = {}
    }
    validateFields(){
      console.log('validate!!')
    }

    getFieldDec = (field, option) => {
      this.options[field] = option
      return (InputComp) => {
        return (
          <div>
            {
              React.cloneElement(InputComp,{
                name: field,
                value: this.state[field] || '',
                onChange: this.handleChange
              })
            }
          </div>
        )
      }
    }

    render(){
      return (

        <Comp
        {...this.props}
        getFieldDec={this.getFieldDec}
        validateFields={this.validateFields}
        />
      )
    }
  }
}

@KFormCreate
class KFormTest extends Component {
  onLogin = ()=>{
    this.props.validateFields()
  }
    render(){
      const {getFieldDec} = this.props
      return (
        <div>
          {getFieldDec('username',{
            rules: [{required: true, message: '请输入用户名'}]
          })(<Input type="text"/>)}
          <Input type="password"></Input>
          <Button onClick={this.onLogin}>登录</Button>
        </div>
        )
    }


}
export default KFormTest