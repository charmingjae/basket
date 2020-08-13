import React, { Component } from "react";
import Header from "./Component/Header";
import axios from "axios";

// function App() {
//   return <Header />;
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  render() {
    // return (
    //   <div className="App">
    //     <h3>
    //       {" "}
    //       Welcome to <u> {this.state.host} </u> Blog!{" "}
    //     </h3>
    //   </div>
    // );
    return <Header />;
  }
}

export default App;
