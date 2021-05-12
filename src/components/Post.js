import React, {useState} from 'react';
import '../App.css'
import Button from "./Button";
import Card from "./Card";

const Post = ({onDelete, post, editPost}) => {
    const [like, setLike] = useState(false);

    return (
        <Card className="filter drop-shadow">
            {post.image && (
                <img
                    src={post.image}
                    alt="My image"
                    className="my-10 mx-auto w-100 h-72 bg-center bg-no-repeat rounded-lg"
                />
            )}
            <h2 className="font-black text-3xl">{post.title}</h2>
            <p className="italic my-3">{post.text}</p>
            <div className="relative">
                <Button
                    className="mr-3"
                    type="submit"
                    variant="warning"
                    onClick={() => onDelete(post.id)}
                >
                    Delete Post
                </Button>
                <Button
                    type="submit"
                    variant="secondary"
                    onClick={() => editPost(post)}
                >
                    Edit Post
                </Button>

                <h4
                    onClick={() => setLike(!like)}
                    className="absolute w-1/12 top-0 right-16 text-3xl cursor-pointer"
                    style={{ color: like ? "red" : "gray" }}
                >
                    &#x2665;
                </h4>
            </div>
        </Card>
    );
}

export default Post;