import React, { useState } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { addPost } from "../Features/PostSlices";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescrip] = useState("");

  const dispatch = useDispatch();

  const onsubmitHandler = (e) => {
    e.preventDefault();
	console.log(title)
    dispatch(addPost({title, description}));
    setTitle("");
    setDescrip("");
  };

  return (
    <>
      <Navbar />
      <div className="mt-40">
        <h1 className="text-center font-bold text-3xl mt-8">Write Your Blog</h1>
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col w-96">
            <label htmlFor="title" className="text-lg font-semibold mb-2">
              Title
            </label>
            <input
              value={title}
              className="border border-gray-300 rounded p-2 mb-4"
              onChange={(e) =>{ 
				setTitle(e.target.value)
			}}
              type="text"
            />

            <label htmlFor="description" className="text-lg font-semibold mb-2">
              Description
            </label>
            <textarea
              value={description}
              className="border border-gray-300 rounded p-2 mb-4 resize-none"
              onChange={(e) => setDescrip(e.target.value)}
              name="description"
              id="description"
              cols="30"
              rows="5"
            ></textarea>

            <div className="flex justify-center mb-4">
              <img
                className="rounded-lg shadow-md"
                width="300"
                src={`https://source.unsplash.com/random/900x700/?${title}`}
                alt=""
              />
            </div>

            <button
              onClick={onsubmitHandler}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
