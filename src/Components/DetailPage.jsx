import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function DetailPage() {
  const { postid } = useParams();
  const postIdString = String(postid);

  const posts = useSelector((state) => state.posts);
  const selectedPost = posts.find((item) => String(item.id) === postIdString);

  // Check if a post with the given id exists
  if (!selectedPost) {
    return <h1>No post found for id: {postid}</h1>;
  }

  return (
    <>
      <div className='mx-3 my-10'>
	  <button className='px-3 py-2 bg-blue-800 text-white rounded-2xl'><Link to="/">go to home</Link></button>
		
		 <h1 className='font-bold text-center text-5xl my-10'>{selectedPost.title}</h1>
        <img src={selectedPost.image}  className="mx-auto sm:w-[20rem] xl:w-[500px] lg:w-[500px]" alt="" />
       
	   <h1 className='my-5 font-bold text-center'>{selectedPost.title}</h1>
        <p className='font-semibold text-center'>{selectedPost.description}</p>

		
      </div>
    </>
  );
}

export default DetailPage;
