import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function ThanksPage() {
	return (

		<>
		<Navbar/>
		<h1 className='text-center font-bold mt-20 mx-2 text-3xl m-auto'>Thanks for creating blog Click To View blog</h1>
		<div className='flex items-center justify-center my-5'>
		<Link to="/" ><button className='px-3 py-2 bg-green-500 rounded font-bold text-white'>Blog Page</button></Link>

		</div>
		</>
	)
}

export default ThanksPage
