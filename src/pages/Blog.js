import React, {useContext, useState} from 'react';
import EditPost from '../components/EditPost';
import {BlogContext} from "../context/blogContext";
import Post from "../components/Post";

const styles = {
    container:{
        display: 'block',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
    }
}

const Blog = () => {
    const [posts, addPost, updatePost, deletePost] = useContext(BlogContext);
    const [post, setPost] = useState(null);

    const handleEditPost = post => setPost(post)

    const handleUpdatePost = (updatedPost) => {
        updatePost(updatedPost)
        setPost(null)
    }

    return(
        <div style={styles.container}>
            <EditPost
                addPost={addPost}
                updatePost={handleUpdatePost}
                editPost={post}
            />
            {posts.map((post) =>(
                <Post
                    post={post}
                    key={post.id}
                    onDelete={deletePost}
                    editPost={handleEditPost}
                />
            ))}
        </div>

    );
}

export default Blog;