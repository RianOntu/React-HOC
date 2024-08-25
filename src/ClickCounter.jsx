import React from 'react'
import WithCounter from './HOC/withCounter';

function ClickCounter({handleIncrement,count}) {
    
    return (
        <>
       <button onClick={handleIncrement}>
        {`clicked ${count} times`}
       </button>
        </>
    )
}

export default WithCounter(ClickCounter);


