
import './App.css';
import Home from '../Home/Home';
import Users from '../Users/Users';
import Address from '../Address/Address';
import Not from '../Not/Not';
import Navbar from '../Navbar/Navbar';
import UserCard from '../UserCard/UserCard'
import{Switch, Route, Redirect } from 'react-router-dom';
import {useState, useEffect} from 'react'
function App() {
  //Moved fetch function here in order to have access to array of results
  const [userList, setUserList] = useState([]);
  async function fetchData(){
    let url = 'https://randomuser.me/api/?seed=onib0002&results=32&format=json&nat=au,ca,nz,gb,us';
    let resp = await fetch(url)
    let data = await resp.json()

    return setUserList(data.results);

    //setUsers(data.results);//new array being put into list
    //changing a state variable tells react to look and see
    //if something needs to be re-rendered
  }

  useEffect(()=>{
    fetchData()
  }, [])
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Switch>
          <Route path = "/address">
            <Address userList={userList}/>
          </Route>
          <Route path = "/users" exact>
            <Users userList={userList}/> 
          </Route> 
          <Route path = "/users/:id">
            <UserCard userList={userList}/> 
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
