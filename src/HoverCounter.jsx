import React from 'react'
import WithCounter from './HOC/withCounter'

function HoverCounter({handleIncrement,count}) {
    
    return (
        <>
        <h1 onMouseOver={handleIncrement}>
        {`hovered ${count} times`}
       </h1>
        </>
    )
}

export default WithCounter(HoverCounter)
