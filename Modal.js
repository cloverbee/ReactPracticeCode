import React from 'react';

class App extends React.Component{
    state = {open:false};

    handleClick = () =>{
        console.log("ahahaha");
        this.setState({open:true});
    }

    handleClose = () =>{
        this.setState({open:false})
    }
    render(){
        return(
            <div>
            <div style={{marginLeft:'10px', border:"solid 2px red", width:"200px", height:"100px"}}>
            I am a box
                <button onClick = {this.handleClick}>
                    CLICK ME!
                </button>
                {this.state.open && <div style = {{width:"100%", height:"100%", backgroundColor:"red" , top:"0", left:"0", position: 'absolute',opacity:"0.3", zIndex:"-1"}}>
            this is a modal
            </div>}
            <b style = {{zIndex:"1000"}} onClick = {this.handleClose}>x</b>
            </div>
            
            </div>
        )
    }
}
export default App;