import './users.css'
import {NavLink} from "react-router-dom"

export default function Profilecard(props){
let item = props.item

  return(
    //<div className="cards">
      <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
              <img className = "activator" src={item.picture.large} alt = "user-Image" />
          </div>
          <div className="card-content">
              <span className="card-title activator green-text text-darken-4" >{item.name.first} {item.name.last}
                  <NavLink to={{pathname: `/users/${props.id}`}}><i className="material-icons right" id="moreDetails"  >more_vert</i></NavLink></span>
                    
                <p style={{ color: "blue" }}>{item.email}</p>
                <p>{item.cell}</p>
          </div>
          <div className="card-reveal">
              <span className="card-title pink-text text-darken-4">More about {item.name.first} {item.name.last}<i className="material-icons right">close</i></span>
              <img className = "activator" src = {item.picture.large} alt = "user-Image" />
              <p>Street:{item.location.street.number +' '+ item.location.street.name} </p>
              <p>Postcode: {item.location.postcode} </p>
              <p>City: {item.location.city} </p>
              <p>Country: {item.location.country} </p>
              <p>UUID: {item.id.name || 'N/A'} </p>
              <p>Username: {item.login.username || 'N/A'} </p>
              <p>Password: {item.login.password || 'N/A'} </p>
            </div>
      </div>
    //</div>       
  )
}

