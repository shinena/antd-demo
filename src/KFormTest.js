import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'

function KFormCreate(Comp) {
  return class extends Component {
    constructor(props) {
      super()
      this.options = {}
      this.state = {
        
      }
    }
    validateFields = (cb) => {
      // console.log(this.state)
      const rets = Object.keys(this.options).map(field=>{
        return this.validateField(field)
      })
      const ret = rets.every(v=> v)
      // 将教研结果传出去，并传递数据
      cb(ret, this.state)
    }

    validateField = (field) => {
      // console.log(this.state)
      const {rules} = this.options[field]
      // ret 如果是false校验失败
      const ret = !rules.some(rule => {
        if(rules.required){
          if(!this.state[field]){
            // 设置错误信息
            this.setState({
              [field + 'Message']: rule.message
            })
            return true
          }
        }
        return false
      })
      // 校验成功，清理错误信息
      if(ret){
        this.setState({
          [field + 'Message']:''
        })
      }
      return ret
    }


    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      }, () => {
        this.validateField(name)
      })
    }

    getFieldDec = (field, option) => {
      this.options[field] = option
      return (InputComp) => {
        return (
          <div>
            {
              React.cloneElement(InputComp, {
                name: field,
                value: this.state[field] || '',
                onChange: this.handleChange
              })
            }
            {
              this.state[field + 'Message'] && (
                <p style={{color:'red'}}>{this.state[field+'Message']}</p>
              )
            }
          </div>
        )
      }
    }

    render() {
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
  onLogin = () => {
    this.props.validateFields((isValid, data)=>{
      if(isValid){
        console.log('登录！')
      } else{
        alert('失败')
      }
    })
  }
  render() {
    const { getFieldDec } = this.props
    return (
      <div>
        {getFieldDec('username', {
          rules: [{ required: true, message: '请输入用户名' }]
        })(<Input type="text" />)}
        {getFieldDec('password', {
          rules: [{ required: true, message: '请输入密码' }]
        })(<Input type="password" />)}
        <Button onClick={this.onLogin}>登录</Button>
      </div>
    )
  }


}
export default KFormTest