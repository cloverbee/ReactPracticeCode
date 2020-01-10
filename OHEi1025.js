import React from 'react';
const Button = ({node, value, insideindex}) => (
    <button key = {insideindex} style = {{color:"red", border:"20px", fontSize:"22px", margin:"10px"}}>
    
        <i>{node}</i> 
        <b>{" | "}</b>
        <i>{value}</i>
    
    </button>
)
var dict = {};
class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {str : ''};
    }
    handleInput = (e) =>{
        console.log("e", e.target.value);
        this.setState({str: e.target.value});
        dict = {};
    }
    
    render(){
 
        return(
            <div>
            <input value = {this.state.str} onChange = {e => this.handleInput(e)}/>
            <br/>
            <div style = {{display:"inline-flex"}} >
            {this.state.str.split('').forEach(function(node){
                if(node in dict){
                    dict[node] += 1;
                }
                else{
                    dict[node] = 1;
                }
            })
            }
            {
            Object.keys(dict).map((node, index)=>
            
             <Button key = {index} node = {node} insideindex = {index} value = {dict[node]}/>

            )}
            </div>
            </div>
        )
    }
}

export default Count;