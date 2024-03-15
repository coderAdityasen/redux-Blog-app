import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      image:
        "https://images.unsplash.com/photo-1600423115367-87ea7661688f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNzA5MTAwOTQ5&ixlib=rb-4.0.3&q=80&w=900",
    },
  ],
};
export const PostSlices = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
		const newPost = {
			id: nanoid(),
			title,
			description,
			image: `https://source.unsplash.com/random/900x700/?${action.payload.image}`,
		  };
      state.posts.push(newPost);
    },

    removerPost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload.id);
    },

    editpost: (state, action) => {
      const findpost = state.posts.find(
        (item) => item.id === action.payload.id
      );
      findpost.title = action.payload.title;
      findpost.description = action.payload.description;
    },
  },
});

export const { addPost, removerPost , editpost } = PostSlices.actions;

export default PostSlices.reducer;
