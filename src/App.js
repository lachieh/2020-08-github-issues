import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import IssueDetail from './components/IssueDetail/IssueDetail';
import IssueList from './components/IssueList/IssueList';
import IssuesByLabel from './components/IssuesByLabel/IssuesByLabel';
import Users from './components/Users/Users';

function App() {

  return (
    <>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/issues">Issues</NavLink></li>
        <li><NavLink to="/users">User Search</NavLink></li>
      </ul>
      <div>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/issues/:number" component={IssueDetail} />
          <Route path="/issues" component={IssueList} />
          <Route path="/labels/:name" component={IssuesByLabel} />
          <Route path="/users" component={Users} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
