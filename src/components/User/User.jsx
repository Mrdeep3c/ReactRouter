import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
    return (
        <div className='bg-orange-700 text-center text-white p-4 text-2xl'>User : {userid}</div>
    )
}

export default User
