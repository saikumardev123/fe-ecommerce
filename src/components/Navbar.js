import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#">ECommerce</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Login</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Register</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
  </ul>
</nav>
      </div>
        )
    }
}
export default Navbar;