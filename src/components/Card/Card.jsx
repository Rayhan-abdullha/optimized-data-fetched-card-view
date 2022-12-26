import React from 'react'
import Button from '../UI/Button/Button'
import Spinner from '../UI/Spinner/Spinner'
import UserDisplay from '../UI/UserDisplay/UserDisplay'

const Card = ({loading, user, handleDec, handleInc, id}) => {
  return (
    <div>
        {loading ? (
          <div className="loading">
            <Spinner />
          </div>
        ) : (
          <>
            <h2>Length: {id}</h2>
            <UserDisplay user={user} />
            <Button onclick={handleDec}>Prev</Button>
            <Button onclick={handleInc}>Next</Button>
          </>
        )}
    </div>
  )
}

export default Card