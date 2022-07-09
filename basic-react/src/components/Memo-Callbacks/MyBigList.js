import React from 'react'

function MyBigList({click}) {
    console.log('My big list called');
  return (
    <div>MyBigList
        <button onClick={click}>ClickBigList</button>
    </div>
  )
}

export default React.memo(MyBigList);