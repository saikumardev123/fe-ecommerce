import React from 'react';
import {NavLink,HashRouter,Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

class Navbar extends React.Component{
    render(){
        return(
            <div>
              <HashRouter>

            
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a className="navbar-brand" href="#">ECommerce</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/register">Register</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/contact">Contact</NavLink>
    </li>
  </ul>
</nav>

  <Route path="/login"  component={Login}></Route>
  <Route path="/register"  component={Register}></Route>
  <Route path="/dashboard"  component={Dashboard}></Route>

</HashRouter>
      </div>
        )
    }
}
export default Navbar;