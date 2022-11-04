import React from 'react'

const SingleCustomer = ({
    id,
    name,
    surname,
    onDeleteCustomer
}) => {
  return (
    <div>
        <ul>
            <li>
                <p>Name: <strong>{name}</strong> Surname: <strong>{surname}</strong></p>
                <button onClick={() => onDeleteCustomer(id)}>Remowe</button>
            </li>
        </ul>
    </div>
  )
}

export default SingleCustomer
