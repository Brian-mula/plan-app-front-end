import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Create from "./pages/create";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Project from "./pages/Project";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Project />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Router path="/register">
              <Register />
            </Router>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
