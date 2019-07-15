import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Routes from './config/router';

function App() {
  return (
    <Fragment>
      <div id="nav">
        <NavLink exact to="/">
          Home
        </NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/about">About Something</NavLink>
      </div>

      <Routes />
    </Fragment>
  );
}

export default App;
