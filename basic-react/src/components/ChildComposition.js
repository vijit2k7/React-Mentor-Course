import React from 'react'

function ChildComposition(props) {

    console.log('props compostition',props);
  return (
    <div>ChildComposition
        {props.children}
    </div>
  )
}

export default ChildComposition