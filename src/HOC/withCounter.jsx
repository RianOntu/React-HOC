import React from 'react'

function WithCounter(OriginalComponent) {
    class NewComponent extends React.Component{
        state={
            count:0
        }
        handleIncrement=()=>{
            this.setState((prevState)=>({count:prevState.count+1}))
        }
render(){
    return (
        <>
      <OriginalComponent count={this.state.count} handleIncrement={this.handleIncrement} />
        </>
    )
}
    }
    
    return NewComponent;
}

export default WithCounter
