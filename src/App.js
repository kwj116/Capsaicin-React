import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Info from "./Component/Info";
import Geon from "./Component/Geon";
import Jicheon from "./Component/Jicheon";
import Reservation from "./Component/Reservation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/info" component={Info}>
            <Info />
          </Route>
          <Route path="/geon" component={Geon}>
            <Geon />
          </Route>
          <Route path="/jicheon" component={Jicheon}>
            <Jicheon />
          </Route>
          <Route path="/reservation" component={Reservation}>
            <Reservation />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
