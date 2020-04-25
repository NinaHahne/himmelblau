import React, { Component } from 'react';
import axios from "axios";
import logo from "./himmelblau-logo.png";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // if you don't use arrow functions to pass functions to children, you need to bind this:
    // this.setBio = this.setBio.bind(this);
  }
  componentDidMount() {
    this.getOpeningHours();
  }
  getOpeningHours() {
    console.log('I will get the current opening hours now :)');
    axios.get("/hours").then(({ data }) => {
      console.log('data from get /hours: ', data);
      // this.setState(data);
      // console.log("state of app: ", this.state);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}
