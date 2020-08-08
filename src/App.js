import React, { Component } from "react";
import Header from "./Component/Header";
import axios from "axios";

// function App() {
//   return <Header />;
// }

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: "",
    // };
  }

  // componentDidMount() {
  //   this._dbTest();
  // }

  // _dbTest = async () => {
  //   const res = await axios.get("/api/test");
  //   console.log(res.data);
  // };

  // componentDidMount() {
  //   this._addData();
  // }

  // _addData = async (e) => {
  //   const { name } = this.state;
  //   e.preventDefault();

  //   const res = await axios("/add/data", {
  //     method: "POST",
  //     data: { data: name },
  //     headers: new Headers(),
  //   });

  //   if (res.data) {
  //     alert("데이터를 추가했습니다.");
  //     return window.location.reload();
  //   }
  // };

  // _userUpdate(e) {
  //   this.setState({ name: e.target.value });
  // }

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
