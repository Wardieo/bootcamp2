import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='border border-black p-10 absolute bottom-10 right-10'>
            <form action="" className='flex flex-col items-center gap-4'>
                <div>
                    <label htmlFor="" className='pr-2'>Username: </label>
                    <input type="text" className='border border-black px-2'/>
                </div>
                <div>
                    <label htmlFor="" className='pr-2 pt-3'>Username: </label>
                    <input type="text" className='border border-black px-2'/>
                </div>
                <div className='pt-4 flex justify-between w-full'>
                    <a href="">Register</a>
                    <button className=''>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login