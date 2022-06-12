// import React, { Component } from 'react';
// class App extends Component {
//   constructor(props) {
//     super(props);
//   this.state = {
//     data: "" ,
//     DataisLoaded:false
//             };
//           }
//   componentDidMount() {
  
//     fetch(
//       "http://localhost:8080 /", {
//         method: 'GET',
//         headers: {"Access-Control-Allow-Origin": "*"},
//        mode: 'no-cors'
//     }).then(async (res) => {
//                     console.log(res);
//                     console.log(await res.json());
//                     return res.json()})
//                   .then((json) => {
//                     console.log(json)
//                       this.setState({
//                           data: json,
//                           DataisLoaded: true
//                       });
//                   })

//                   fetch(
//                     "https://jsonplaceholder.typicode.com/users")
//                                 .then((res) => res.json())
//                                 .then((json) => {
//                                     console.log(json)
//                                 })
//   }
//   render() { 
//     return (<div>
//       <div>hello</div>
//       <div>dataLoadStatus-{this.state.DataisLoaded}</div>
//       <p>{this.state.data}</p>
//     </div>);
//   }
// }
 
// export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;