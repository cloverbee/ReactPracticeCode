import React from 'react';
import List from './List';

const data = {
    mylist : [
    {
    'title': 'Futurama',
    'id': 1,
    'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
    },
    {
    'title': 'The Interview',
    'id': 2,
    'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
    },
    {
    'title': 'Gilmore Girls',
    'id': 3,
    'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
    }
    ],
    recommendations : [
    {
    'title': 'Family Guy',
    'id': 4,
   'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
   },
   {
   'title': 'The Croods',
   'id': 5,
   'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'},
   {
   'title': 'Friends',
   'id': 6,
   'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
   }]};
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           mylist:data.mylist.map(node=>[node.title, node.id, node.img]),
           recommendations: data.recommendations.map(node=>[node.title, node.id, node.img])
        };
    }
    componentDidMount(){
        console.log(this.state.mylist)
    }
    handleAdd = (p) => {
        console.log("p", p);
        this.setState((state, props) => ({ 
                mylist: state.mylist.filter(node => node[1] !== p[1]), 
                recommendations: state.recommendations.concat([p])
            })
        );

        console.log("abcdefg");
        //console.log(p);
    };

    handleRemove = (tnode) =>{
        this.setState((state, props)=>({
                mylist: state.mylist.concat([tnode]),
                recommendations: state.recommendations.filter(node => node[1]!==tnode[1])
            })
        );
    }
    render(){
        return (
            <div>
                {console.log("rendering in App....")}
                <img style = {{width:"200px"}} src ="https://cdn.arstechnica.net/wp-content/uploads/2018/08/Netflix_Logo_Digital_Video-800x450.jpg" alt='--'/>
                <List name = {'mylist'} function = {this.handleAdd} listdata = {this.state.mylist} />
                <List name = {'recommendations'} function = {this.handleRemove} listdata = {this.state.recommendations}/>
                <div style ={{marginTop:"20px", border:"dashed grey 1px", padding:"10px"}}>
                {
                    this.state.mylist.map(node => 
                            <li style = {{display:"inline", color:"red", margin:"10px"}} key = {node[1]}>{node[0]}
                            <b >{"  "}</b>
                            </li> 
                    )
                }
                </div>
            </div>
        )
    }
}
export default App;