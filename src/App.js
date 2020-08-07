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
      host: "",
      test: "",
    };
  }

  componentDidMount() {
    this._dbTest();
  }

  _dbTest = async () => {
    const res = await axios.get("/api/test");
    console.log(res.data);
  };

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
