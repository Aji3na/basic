import React from 'react'

function DifferentComponents2() {
  return (
    <div>
        <h3>Class 2</h3>
        <h4>Different type of Components</h4>
        <ul>
            <li>
            FunctionalComponent
            <div><FunctionalComponent /></div>
            </li>
            <li>
            ClassComponent
            <div><ClassComponent /></div>
            </li>
            <li>
            ArrowFunctionalComponent
            <div><ArrowFunctionalComponent /></div>
            </li>
            
            </ul></div>
  )
}

// FunctionalComponent
function FunctionalComponent() {
  return (
    <div>Functional Component</div>
  )
}

// ClassComponent
class ClassComponent extends React.Component {
  render() {
    return (
      <div>Class Component</div>
    )
  }
}

// ArrowFunctionalComponent
 const ArrowFunctionalComponent = () => {
  return (
    <div>ArrowFunctional Component</div>
  )
}


export default DifferentComponents2