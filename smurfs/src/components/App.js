import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    smurfToEdit: state.smurfToEdit,
    isEditing: state.isEditing
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
