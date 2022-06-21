import "./App.scss";
import logo from "./logo.svg";
import ListTodo from "./Todos/listTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import MyComponent from "./example/myComponent.js";
import Home from "./example/Home";
import ListUser from "./example/Users/ListUser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import DetailUser from "./example/Users/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-Header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
