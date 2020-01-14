import React from 'react';
import axios from 'axios';
const link1 = 'https://api.github.com/users?per_page=100';
class App extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {userlist:[], detail:''};
        
    }
    componentDidMount(){
        axios.get(link1)
        .then(res =>{
            console.log("res data", res.data);
            this.setState({userlist: res.data.map(node => [node.id, node.avatar_url, node.url])});
        })
        .catch(err => {
            console.log(err.toString());
        })
        
    }
    handleClick = (url) =>{
        axios.get(url)
        .then(res => {
            console.log('res detail', res.data);
            this.setState({detail: [res.data.id, res.data.location, res.data.email, res.data.created_at]})
        })
        .catch(err => {
            console.log(err.toString());
        })
    }
    render(){
        console.log("render detial", this.state.detail);
        return(
            <div>
            {this.state.userlist.map(node => 
                <div key = {node[0]} onClick={()=>this.handleClick(node[2])}>
                    <img width = "50px" src = {node[1]}/>
                </div>
            )}
            <div style ={{marginLeft:"10px"}}>
            {this.state.detail}
            </div>
            </div>
        )
    }
}

export default App;