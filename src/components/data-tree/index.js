import React from 'react'
import ReactDOM from 'react-dom'
import NodeTree from './node-tree.jsx'
import './styles.css'

function topLevel(data) {
  return data.filter(node => !node.parent_id)
}

function tree(data) {
  return topLevel(data).map(each => {
    each.subcategories = traverse(data, each.id)
    return each
  })
}

function traverse(data, parentId) {
  const children = data.filter(each => each.parent_id === parentId)
  children.forEach(child => {
    child.subcategories = traverse(data, child.id)
  })
  return children
}

function buildTree(data, value) {
  return <NodeTree data={data} value={value} />
}

class TreeData extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const strBefore = JSON.stringify(this.props.categories, undefined, 4)
    const strAfter = JSON.stringify(tree(this.props.categories), undefined, 4)

    return (
        <div style={{display: 'table'}}>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '80px'}}><p>&nbsp;</p></div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '220px'}}>
            <h1 style={{float: 'right'}}>Traverse JSON data array and transform into data tree via Recursion</h1>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div style={{display: 'table-cell', verticalAlign: 'middle'}}><p>{buildTree(strBefore, 'data before')}</p></div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '120px'}}>
            <p style={{float: 'right'}}>----------------></p>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'top'}}><p>{buildTree(strAfter, 'data after')}</p></div>
        </div>
    )
  }
}

export default TreeData