import SignUp from './components/SignUp';
import Login from './components/Login'
import HomePage from './components/HomePage';
import { Switch, Route } from "react-router-dom";
import Profile from './components/Profile';

function App() {
  return (
    <>
     <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUp} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
