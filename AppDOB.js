import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {Age: 0, Date: undefined};
    }
    changeDate = (e) =>{
      console.log("date has been changed", e);
      this.setState({Age:  new Date().getFullYear() - new Date(e.target.value).getFullYear(), Date:e.target.value})
    }
    render(){
      return (
        <div>
          <b>{"Age: " + this.state.Age}</b>
          <p></p>
          <input type = "date" value ={this.state.Date|| "2019-12-20"}  onChange = {(e) => this.changeDate(e)}/>
        </div>
      )
    }
}

export default App;
