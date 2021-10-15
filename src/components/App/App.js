
import './App.css';
import Home from '../Home/Home';
import Users from '../Users/Users';
import Address from '../Address/Address';
import Not from '../Not/Not';
import Navbar from '../Navbar/Navbar';
import{Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Switch>
          <Route path = "/address">
            <Address />
          </Route>
          <Route path = "/users">
            <Users /> 
          </Route>   
          <Route path = "/404">
            <Not />
          </Route>
          <Route path = "/" exact>
            <Home />
          </Route>
          <Redirect to = "/404" />
        </Switch>
      </main>
    </div>
  );
}
export default App;
