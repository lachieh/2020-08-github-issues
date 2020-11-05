import React, { useState } from 'react'
import UserCard from '../UserCard/UserCard';

function Users() {
  const [ userName, setUserName ] = useState('');
  const [ users, setUsers ] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then(res => {
        if (res.status !== 200) {
          throw Error(`Could not find user: ${userName}}`)
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        const newUsers = [...users]
        newUsers.unshift(data);
        setUsers(newUsers);
        setUserName('');
      })
      .catch(error => {
        alert('That is not a valid username. Please try again.')
      })
  }

  return (
    <div>
      <h1>User Search</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Username:
            <input type="text" value={userName} onChange={(event) => { setUserName(event.target.value) }} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
      <h2>Results</h2>
      <div>
        { users.map((user) => {
          return <UserCard user={user} />
        }) }
      </div>
    </div>
  )
}

export default Users
