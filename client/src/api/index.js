import axios from "axios";

//const url = "https://lm-memories.herokuapp.com/posts";
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const signIn = (data) => axios.post(`${url}/signin`, data);
export const signUp = (data) => axios.post(`${url}/signup`, data);
