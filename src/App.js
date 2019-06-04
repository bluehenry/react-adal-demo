import React, { Component } from 'react';
import { adalApiFetch } from './adalConfig';

class App extends Component {

  state = {
    apiResponse: ''
  };

  componentDidMount() {

    // We're using Fetch as the method to be called, and the /me endpoint 
    // from Microsoft Graph as the REST API request to make.
    adalApiFetch(fetch, 'https://localhost:3000', {})
      .then((response) => {

        // This is where you deal with your API response. In this case, we            
        // interpret the response as JSON, and then call `setState` with the
        // pretty-printed JSON-stringified object.
        response.json()
          .then((responseJson) => {
            this.setState({ apiResponse: JSON.stringify(responseJson, null, 2) })
          });
      })
      .catch((error) => {

        // Don't forget to handle errors!
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        <p>API response:</p>
        <pre>{ this.state.apiResponse }</pre>
      </div>
    );
  }
}

export default App;