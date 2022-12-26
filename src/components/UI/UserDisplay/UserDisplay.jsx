import React from 'react'

const UserDisplay = ({user}) => {
  return (
    <div className='singleUser'>
        <h1>Name: {user.name}</h1>
        <div className='contact'>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    </div>
  )
}

export default UserDisplay