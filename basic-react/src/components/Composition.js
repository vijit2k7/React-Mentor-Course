import React from 'react'
import ChildComposition from './ChildComposition'
function Composition() {
  return (
    <>
    <ChildComposition>
        <h2>Hello Children!</h2>
        <h2>Hi There!</h2>
    </ChildComposition>
    </>
  )
}

export default Composition