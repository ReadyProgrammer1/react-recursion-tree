import React from 'react'

const scaleNames = {
  a: 'A',
  b: 'B'
};

class RichterInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onMagnitudeChange(e.target.value)
  }

  render() {
    const magnitudeA = this.props.magnitudeA
    const magnitudeB = this.props.magnitudeB
    const scale = this.props.scale
    return (
      <fieldset style={{width: '240px'}}>
        <legend>Enter magnitude {scaleNames[scale]}:</legend>
        <input value={scaleNames[scale] === 'A' ? magnitudeA : magnitudeB}
                onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default RichterInput