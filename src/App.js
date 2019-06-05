import React, { Component } from 'react';
import { authContext, adalConfig } from './adalConfig';
import { runWithAdal } from 'react-adal';

const DO_NOT_LOGIN = false;

class App extends Component {

  state = {
    username: ''
  };

  componentDidMount() {

    runWithAdal(authContext, () => {
      // TODO : continue your process
      var user = authContext.getCachedUser();
      if (user) {        
        console.log(user);
        console.log(user.userName);
        this.setState({ username: user.userName });        
      }
      else {
          // Initiate login
          // authContext.login();        
        console.log('getCachedUser() error');
      }
  
      var token = authContext.getCachedToken(adalConfig.clientId)
      if (token) {        
        console.log(token);
      }
      else {        
        console.log('getCachedToken() error');       
      }
     }, DO_NOT_LOGIN);
  }

  render() {
    return (
      <div>
        <p>username:</p>
        <pre>{ this.state.username }</pre>
      </div>
    );
  }
}

export default App;