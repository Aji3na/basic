// Javascript XML
import React from 'react'


const name="Aji"
const content=<h3>React tutorial By {name}</h3>
const list=(
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
    </ul>
)
const list1=
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
    </ul>
const list3=
<>
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
</ul>
</>


function Jsx() {
  return (
    <>
    <div>{content}</div>
    <a>{list}</a>
    <a>{list1}</a>
    <a>{list3}</a>
    </>  
    
  )
}

export const JsxCondition = () => {
  return (
    <>
    {10>5 ? "ABC":"XYZ"}
    </>
  )
}



export default Jsx