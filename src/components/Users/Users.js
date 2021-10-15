import { useState, useEffect } from "react"
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css'
import './users.css'
import Profilecard from './Profilecard.js'

export default function Users(props){
  const [users,  setUsers] = useState([]);
  const [Name,  setName] = useState([]);
  const [Picture,  setPicture] = useState([]);
  const [Email,  setEmail] = useState([])
  const [Phone, setPhone] = useState([])
  

  async function fetchData(){
    let url = 'https://randomuser.me/api/?seed=onib0002&results=32&format=json&nat=au,ca,nz,gb,us';
    let resp = await fetch(url)
    let data = await resp.json()

    return data;

    //setUsers(data.results);//new array being put into list
    //changing a state variable tells react to look and see
    //if something needs to be re-rendered
  }

  useEffect(() =>{
    // all useEffect fxns run on the initial render of the componet
    fetchData().then(data => {

      console.log('data from fetch', data);

      setUsers(data.results)
    })
  }, []);

  return(
    <div className = "users">
      
      {!users.length &&<p style={{ transitionDelay:"2s" }}> User page Loading! Please Wait...</p>} 
      
      {users && users.map((item, id) => (
        <>
        <div className="cards">
         <Profilecard item = {item} id ={id}/> 
      </div>  
      </>
      ))}


    </div>
  )
}//logical short-circuiting
//value && object
//if value is true then the object is rendered
//if value is false then the object is not Rendered
