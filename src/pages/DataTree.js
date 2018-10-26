import React, { Component } from 'react'
import TreeData from '../components/data-tree'
import data from '../data/categories.json'

class DataTree extends Component {
  render() {
    return (
      <TreeData categories={data.categories}/>
    )
  }
}

export default DataTree
