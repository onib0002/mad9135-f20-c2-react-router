import { useState, useEffect } from "react"
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'material-icons/iconfont/material-icons.css'
import './address.css'

export default function Users(props){
  const [users,  setUsers] = useState([]);
  const [Name,  setName] = useState([]);
  const [Picture,  setPicture] = useState([]);
  const [Gender, setGender] = useState([])
  const [Email,  setEmail] = useState([])
  //hooks return 2 things - variable , function to change the variable
  //usState- for creating abd updating variables inside the state
  //useEffect - for rendering lifecycle
  // function addUsers(){
  //   setUsers([...users])
  //   setGender([...gender])
  //   setEmail([...email])
  // }
  

    
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
    // all useEffect fxns run on the initial render of the com ponet
    fetchData().then(data => {

      console.log('data from fetch', data);

      setUsers(data.results)
    })
  }, []);

  let sortedName = users.sort((a, b)=> {
    if(a.name.last > b.name.last){
      return 1;
    }else if(a.name.last < b.name.last){
      return -1;
    }else{
      return 0;
    }
    })

  return(
    <div className = "address ">
      
      {!users.length &&<p> There are no user yet</p>} 
      <table className ="centered-responsive-table">
      <thead>
              <tr>
                <th class="tg-0pky">First name</th>
                <th class="tg-0lax">Last name</th>
                <th class="tg-0lax">Address</th>
                <th class="tg-0lax">More</th>
              </tr>
            </thead>
      
     
      {sortedName.map((item) => (
        <>
        {/*<p key = {item.name.last}>{item.name.first +'- '+ item.name.last + ' '+  item.picture.thumbnail +' ' + item.gender + '  ' + item.email }</p>*/}
        
            
            <tbody>
              <tr class = "stripefd">
                <td class="tg-0lax">{item.name.first}</td>
                <td class="tg-0lax">{item.name.last}</td>
                <td class="tg-0lax">{item.location.street.number +' '+ item.location.street.name}</td>
                <td class="tg-0lax"></td>
              </tr>
            </tbody>
            

      </>
      ))}
</table>

    </div>
  )
}//logical short-circuiting
//value && object
//if value is true then the object is rendered
//if value is false then the object is not Rendered