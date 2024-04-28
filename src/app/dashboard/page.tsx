import { auth, currentUser } from '@clerk/nextjs/server';
import React from 'react'

 async function Dashboardpage  ()  {
    const { userId } = auth();
    const user = await currentUser()

    if(!userId && !user){
        return <div>You are not logged in</div>
    }
   
  
  return (
    <div className= "mt-10 text-start  max-w-96 mx-auto bg-neutral-200 p-5 rounded flex flex-col justify-center items-center">
      <h1 className='text-4xl font-bold'>Welcome</h1>
    <p>First Name: {user?.firstName}</p>
    <p>Last Name: {user?.lastName}</p>
    <p>Email: {user?.emailAddresses[0].emailAddress}</p>
</div>

  )
}

export default Dashboardpage
