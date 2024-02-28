import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removerPost } from '../Features/PostSlices'
import { Link } from 'react-router-dom'

function BlogsFeed() {

	const dispatch = useDispatch()

	const blogs = useSelector((state)=> state.posts)
	console.log(blogs)

	return (
		<>
		<div>
			{
				blogs.map((item)=>{
					return(
						<div key={item.id}>
						<div className="mt-20 max-w-lg mx-auto ">
    <div className="bg-white mx-auto shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={item.image}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
           {item.title}
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3">
         {`${item.description.slice(0,30)}...`}
        </p>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          
        >
			<Link to={`/post/${item.id}`}>
			 Read more
			</Link>
         
        </button>
		<button onClick={()=>{
			dispatch(removerPost(item))
		}}
          className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          
        >
          remove
        </button>
      </div>
    </div>
  </div>		
						</div>
					)
				})
			}
		</div>
  
</>
	)
}

export default BlogsFeed
