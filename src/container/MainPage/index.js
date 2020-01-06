import React, { Component } from "react";
import { connect } from "react-redux";
import { login as loginAction } from "actions/auth";

import logo from "./logo.svg";
import "./style.css";

class MainPage extends Component {
  handlerClick = ev => {
    const { login } = this.props;
    login( 'Henry', '123')
  };

  render() {
    const { status, name } = this.props;
    const { handlerClick } = this;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning React status for { name }: { status }
          </a>
          <button style={{margin: '20px 0'}} type="button" onClick={handlerClick}>Click Me</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  status: state.auth.status,
  name: state.auth.profile.name,
});

const mapDispatchToProps = dispatch => ({
  login: (login, password) => dispatch(loginAction(login, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
