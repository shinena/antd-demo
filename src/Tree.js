import React, { Component } from 'react'



class TreeNode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  get isFolder() {
    return this.props.model.children && this.props.model.children.length
  }
  toggle = () => {
    if (this.isFolder) {
      this.setState({
        open: !this.state.open
      })
    }
  }
  render() {
    return (
      <ul>
        <li>
          <div onClick={this.toggle}>
            {this.props.model.title}
            {this.isFolder ? <span>
              {this.state.open ? '-' : '+'}
            </span> : null}

          </div>
          {this.isFolder ? (
            <div style={{ display: this.state.open ? 'block' : 'none' }}>
              {this.props.model.children.map(model => (
                <TreeNode model={model} key={model.title} />
              ))}
            </div>
          ) : null}
        </li>
      </ul>
    )
  }
}


export default class Tree extends Component {
  treeData = {
    title: 'web全栈1',
    children: [
      {
        title: 'web全栈2',
        children: [
          { title: 'web全栈3' }
        ]
      },
      {
        title: 'web全栈4',
        children: [{
          title: 'web全栈5'
        }
        ]
      }
    ]
  }
  render() {
    return (
      <div>
        <TreeNode model={this.treeData} />
      </div>
    )
  }
}