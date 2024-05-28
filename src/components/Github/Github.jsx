import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setdata] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/Mrdeep3c')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setdata(data);
        })
    }, [])

    return (
        <>
            <div className='bg-orange-700 text-center text-white p-4 text-2xl'>
                Github Followers : {data.followers}
                <img src={data.avatar_url} alt="github profile" width="400px"/>
            </div>
            
        </>
    )
}

export default Github
