import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div class="topnav">
        <a class="active" href="/">
          Home
        </a>
        <a href="/todo">Todos</a>
        <a href="/about">About</a>
      </div>
    );
  }
}
export default Nav;
