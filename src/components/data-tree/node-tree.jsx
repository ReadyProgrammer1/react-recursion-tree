import React from 'react'

class NodeTree extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data
    const value = this.props.value
    return (
      <div>
        <pre value={value}>{data}</pre>
      </div>
    )
  }
}

export default NodeTree