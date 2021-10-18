import './UserCard.css'
import { useParams } from 'react-router-dom'


export default function UserCard(props) {
  const userList = props.userList
  let {id} = useParams();
  console.log(id)

  return(
    <div className="userCard">
           <span className="card-title pink-text text-darken-4">{`${userList[id].name.first}`} {`${userList[id].name.last}`}</span>
              <img className = "activator" src = {`${userList[id].picture.large}`} alt = "user-Image" />
              <p>Street: {`${userList[id].location.street.number}  ${userList[id].location.street.name} `}</p>
              <p>Postcode: {`${userList[id].location.postcode}`}</p>
              <p>City: {`${userList[id].location.city}`}</p>
              <p>Country: {`${userList[id].location.country}`} </p>
              <p>UUID: {`${userList[id].id.name || 'N/A'}`}</p>
              <p>Username: {`${userList[id].login.username || 'N/A'}`} </p>
              <p>Password:{`${userList[id].login.password || 'N/A'}`}</p>
            </div>
  );
}