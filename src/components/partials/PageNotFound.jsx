import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
    <div className='404pager bg-primary'>
                <div className='container'>
                    <div className='flex flex-col justify-center gap-2 items-center h-screen w-full'>
                        <h1 className='text-8xl text-red-500'>
                            <span className='italic text-accent '>404</span>{" "}
                            <small className='text-white'>-</small> Page Not Found
                        </h1>
                        <h2 className='w-1/2 text-center'>
                            Sorry, the page you are looking for could not be found. As it
                            either does not exist or has an invalid endpoint
                        </h2>
                        {/* <img
                        src='/public/404.gif'
                        alt='ducking-around'
                        className='size-[20rem] transition-all rounded-md border-2'
                    /> */}
                        <h4 className='text-2xl'>Proceed to login?</h4>
                        <button className='btn btn--accent'>
                            <Link
                                className='px-10 rounded-full'
                                to='/login'>
                                Login
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default PageNotFound