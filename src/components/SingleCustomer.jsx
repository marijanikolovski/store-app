import React from 'react'
import { Link } from 'react-router-dom'

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
                <Link to={`/customers/${id}`}>Latest Purchase</Link>
                <button onClick={() => onDeleteCustomer(id)}>Remowe</button>
            </li>
        </ul>
    </div>
  )
}

export default SingleCustomer
