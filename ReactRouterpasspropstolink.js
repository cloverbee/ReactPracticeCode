//https://tylermcginnis.com/react-router-pass-props-to-link/
import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


//<Link to="/somewhere"/>
// but you can use a location instead
const location = {
  pathname: '/somewhere',
  state: { fromDashboard: true, a:1 }
}
//<Link to={location}/>
//<Redirect to={location}/>
//history.push(location)
//history.replace(location)

class Home extends React.Component{
    render(){
        //this.props.history.replace(location);
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
};
  
  /* AnotherPage component */
  const AnotherPage = ({match, location}) => {
    console.log(match);
    console.log('location: ',location);
    return (
      <div>
        <h2>Another Page</h2>
        <p>match.url: {match.url}</p>
        <p>match.path: {match.path}</p>
        <p>match.params: {JSON.stringify(match.params)}</p>
      </div>
    );
  };
  
  /* App component */
  class App extends React.Component {
    
    render() {
      
      return (
        <div>
            
            <BrowserRouter>
            <Link to={location}>Link to somewhere page</Link>
            {/*exist state object after pointed to the link, but will no more exist after return back to App home page*/}
            <div>
                <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/somewhere"  component={AnotherPage} />

                </Switch>
            </div>
            </BrowserRouter>
        </div>
      );
    }
  }

  export default App;