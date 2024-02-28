import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
	posts : [
		{id : 1 , title : "Noteworthy technology acquisitions 2021" , description : "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." , image : "https://images.unsplash.com/photo-1600423115367-87ea7661688f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzA5MTAwOTQ5&ixlib=rb-4.0.3&q=80&w=900"},

	]

}

export const PostSlices = createSlice({
	name : "post",
	initialState,
	reducers : {
		addPost : (state , action)=>{
			const addpost = {id : nanoid() , title : action.payload.title , description : action.payload.description , image : `https://source.unsplash.com/random/900x700/?${action.payload.iamge}`}
			state.posts.push(addpost)
		},

		removerPost : (state , action)=>{
			state.posts = state.posts.filter((item)=> item.id !== action.payload.id)
		}
	}
})

export const {addPost , removerPost} = PostSlices.actions


export default PostSlices.reducer