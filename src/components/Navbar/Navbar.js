import './navbar.css';
import {NavLink} from 'react-router-dom';

export default function Navbar(props){
  
  return(
    <div className="navbar">
      <NavLink activeClassName = "active" to="/" exact>Home</NavLink>
      <NavLink activeClassName = "active" to="/users">Users List</NavLink>
      <NavLink activeClassName = "active" to="/address">Address List</NavLink>
    </div> 
  );
}
