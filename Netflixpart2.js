import React from 'react';
 class List extends React.Component{
    handleClick = (node) =>{
        this.props.function(node);
    }
    render(){
        console.log(this.props.name);
        return (
            <div>
                <b>{this.props.name}</b>
                <br/>
                <br/>
                {this.props.listdata.map((node) =>
                    <li  style = {{display:"inline"}} key = {node[1]} >
                        <i > {node[0]} </i>
                        <img src = {node[2]} alt = '' onClick = {() => this.handleClick(node)}/>
                    </li>
                )}
            </div>
        )
    }
 }
 export default List;