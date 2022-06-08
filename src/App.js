import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
