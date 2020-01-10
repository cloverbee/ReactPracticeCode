import React from 'react';
import axios from 'axios';
const Button = ({node, value, insideindex}) => (
    <button key = {insideindex} style = {{color:"red", border:'2px solid black', borderColor:"black" ,fontSize:"22px", margin:"10px"}}>
    
        <i>{node}</i> 
        <b>{" | "}</b>
        <i>{value}</i>
    
    </button>
)
var dict = {};
class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {str : '', countDuplicate:[]};
    }
    handleInput = (e) => {
        console.log("e", e.target.value);
        this.setState({str: e.target.value});
        dict = {};
    }
    handleButtonClick = (e) => {
        dict = {};
        e.preventDefault(); // prevent Default HTML action
        console.log("axios.get");
        axios.get(`http://127.0.0.1:8080/?targetstring=${this.state.str}`)
        .then(response => {
            console.log("response", response);
            this.setState({countDuplicate: response.data})
        })
        .catch(err=>{
            console.log(err.toString());
        });
    }
    
    render(){
        return(
            <div>
                <input value = {this.state.str} onChange = {e => this.handleInput(e)}/>
                <button style = {{color: "blue"}} onClick = {e => this.handleButtonClick(e)}>{'CLICK ME'}</button>
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
                    
                    }{
                        Object.keys(dict).map((node, index)=>
                        <Button style = {{border:"2px"}} key = {index} node = {node} insideindex = {index} value = {dict[node]}/>
                        )
                    }
                    <div>{(this.state.countDuplicate.length > 0) && "response: " + this.state.countDuplicate }</div>
                </div>
            </div>
        )
    }
}

export default Count;