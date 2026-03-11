import React from 'react'

function Counter() {
    let a=2,b=3;
  return (
    <div>
        <h4>JS IN JSX</h4>
        <p>HTML part: a*b</p>
        <p>JS-expression: {a*b}</p>
    </div> 
  )
}

export default Counter;