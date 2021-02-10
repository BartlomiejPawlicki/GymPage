import React,{useState} from 'react'
import '../style/UsersPage.css'


const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const API = "https://randomuser.me/api/?results=10";

  const handleDataFetch = async () => {
    const res = await fetch(API);
    const data = await res.json();
    const results = data.results;

    setUsers(results)


  }; 

  return (
    <div className="users">
      <ButtonFetchUsers click={handleDataFetch} />
      {users ? <UsersList users={users} /> : null}
    </div>
  );
};

const UsersList = props => {
  const users = props.users.map(user => (
    <li className="users__list" key={user.login.uuid}>
      <div className="users__person">
    <img className="users__photo" src={user.picture.large} alt={user.name.last}/>
    <div className="users__description">
    <h4 className="users__header">{`${user.name.title} ${user.name.last}`}</h4>
      <p>Hej! Jestem bardzo zadowolony. Znakomita !!!</p>
    </div>
      </div>
     
    </li>
  ));

  return <ul className="users__group">{users}</ul>;
};

const ButtonFetchUsers = ({ click }) => {
  return (
    <div>
      <button className="users__button" onClick={click}>Wylosuj 10 zadowolonych użytkowników</button>
    </div>
  );
};

export default UsersPage;
