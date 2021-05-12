import React, { useState, createContext } from "react";

export const BlogContext = createContext();


export const BlogContextProvider = props => {
const [posts, setPosts] = useState([]);

const addPost = (newPost) => {
    setPosts([
        newPost,
        ...posts
    ])
}

const deletePost = (id) => {
    const updatedPosts = [...posts].filter((post) => post.id !== id);
    setPosts(updatedPosts)
}

const updatePost = (updatedPost) => {
    const updatedPosts = posts.map(post => {
        if (updatedPost.id === post.id) return updatedPost
        return post
    })
    setPosts(updatedPosts)
}
    return (
        <BlogContext.Provider value={[posts, addPost, updatePost, deletePost, updatePost]}>
            {props.children}
        </BlogContext.Provider>
    );
};