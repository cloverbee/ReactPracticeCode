import React from 'react';

class App extends React.Component{
    state = {
        list:['abc',], 
        inputstr:""
    }
    handleClick = () =>{
        //console.log("state", state)
        console.log("state.inoutstr", this.state.inputstr)
        this.setState((state, props)=>(
            {list: state.list.concat([state.inputstr]), inputstr:""})
        )
        
    }
    handleInput =(e)=>{
        this.setState({inputstr:e.target.value})
        console.log("this.state.inputStr", this.state.inputstr)
        console.log("state list", this.state.list);
    }
    render(){
        console.log('rendering',this.state.list)
        return(
           
            <div style={{background:"grey", width:"300px"}}>
                <input value={this.state.inputstr} onChange={this.handleInput}/>
                <button onClick={this.handleClick}>add</button>
                <ul style={{ opacity:"0.7", width:"100px"}}>
                {this.state.list.map(node => 
                    <li style={{width:"50px", padding:"3px",backgroundColor:"aqua", "border-radius": "3px",margin: "0 0 3px 0",}}>
                    {node}
                    </li>
                )}
                </ul>
            </div>
        )
    }
}

export default App;