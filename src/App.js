import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Users from './pages/Users';
import Reports from './pages/Reports';
import Orders from './pages/Orders';
import AddUser from './pages/AddUser';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/add-user" component={AddUser} />
        <Route exact path="/" component={Users} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/reports" component={Reports} />
        {/* <Route exact path="/posts/:id" component={SinglePostPage} /> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
