import React from 'react'
import RichterInput from './richter-input'

function testNumber(magnitude) {
  if (!validate(magnitude)) {
    return ''
  }
  //const rounded = Math.round(magnitude * 10) / 10
  if (magnitude > 10) {
    return ''
  } else {
    return magnitude.toString()
  }
}

function validate(str) {
  var rgx = /^[0-9]*\.?[0-9]*$/
  return str.match(rgx)
}

function isNumeric(num) {
  return (num >=0 || num < 0);
}

function MagnitudeResult(props) {
  const magnitudeA = parseFloat(props.magnitudeA)
  const magnitudeB = parseFloat(props.magnitudeB)
  if (magnitudeB > magnitudeA) {
    return <p>Magnitude b cannot be greater than Magnitude A</p>
  }
  const result = richterScale(+magnitudeA.toFixed(2), +magnitudeB.toFixed(2))
  return <div><p>A Magnitude {!Number.isNaN(magnitudeA) ? magnitudeA : ''} is&nbsp;
    {!Number.isNaN(result) ? result : ''} times stronger than a Magnitude&nbsp; 
    {!Number.isNaN(magnitudeB) ? magnitudeB : ''} on the order of TNT.<br/><br/>
    Actually the magnitude scale is logarithmic, so a magnitude 9.7 earthquake is 10 9.7 10 6.8 = 794.328 times<br/>
    bigger on the seismogram than a magnitude 6.8 earthquake. The "recursion conversion" above gives a general<br/>
    idea of the "magnitude" of the difference between scales as it relates to the destructive power of TNT.
  </p></div>
}

function richterScale(magnitudeA, magnitudeB) {
  if (!isNumeric(magnitudeA)) {
    return ''
  }
  if (magnitudeA < 1) return
  if (magnitudeA === 1) return 1
  if (magnitudeA === magnitudeB) return 1
  +magnitudeA.toFixed(2)
  return +(magnitudeA * 10).toFixed(2) * richterScale(+(magnitudeA - 1).toFixed(2), +magnitudeB.toFixed(2))
}

class RichterCalculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleMagnitudeAChange = this.handleMagnitudeAChange.bind(this)
    this.handleMagnitudeBChange = this.handleMagnitudeBChange.bind(this)
    this.state = {magnitudeA: '', magnitudeB: '', scale: ''}
  }

  handleMagnitudeAChange(magnitudeA) {
    this.setState({scale: 'a', magnitudeA})
  }

  handleMagnitudeBChange(magnitudeB) {
    this.setState({scale: 'b', magnitudeB})
  }

  render() {
    const scale = this.state.scale
    const magnitudeA = this.state.magnitudeA
    const magnitudeB = this.state.magnitudeB
    const testMagnitudeA = scale === 'a' ? testNumber(magnitudeA) : magnitudeA
    const testMagnitudeB = scale === 'b' ? testNumber(magnitudeB) : magnitudeB

    return (
      <div style={{marginLeft: '100px', marginTop: '50px'}}>
        <h1>Richter Scale Recursion</h1>
        <h2>Magnitude A is how much stronger than Magnitude B?</h2>
        <RichterInput
          scale="a"
          magnitudeA={testMagnitudeA}
          onMagnitudeChange={this.handleMagnitudeAChange} />

        <RichterInput
          scale="b"
          magnitudeB={testMagnitudeB}
          onMagnitudeChange={this.handleMagnitudeBChange} />

        <MagnitudeResult
          magnitudeA={parseFloat(testMagnitudeA)}
          magnitudeB={parseFloat(testMagnitudeB)} 
          scale={scale}
        />

      </div>
    )
  }
}

export default RichterCalculator