import { useState, useEffect } from "react"
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css'
import './users.css'
import Profilecard from './Profilecard.js'

export default function Users(props){
  const [Name,  setName] = useState([]);
  const [Picture,  setPicture] = useState([]);
  const [Email,  setEmail] = useState([])
  const [Phone, setPhone] = useState([])
  
  let users = props.userList;

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
