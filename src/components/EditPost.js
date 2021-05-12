import React, {useEffect, useState} from 'react';
import '../App.css'
import Input from "./Input";
import FormField from "./FormField";
import ContentContainer from "./ContentContainer";
import TextArea from "./TextArea";
import Button from "./Button";

const EditPost = ({addPost, updatePost, editPost}) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const handleChangeImage = (e) => {
        setImage(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (editPost) {
            const updatedPost = {
                ...editPost,
                title: title,
                text: text,
                image: image,
            }
            updatePost(updatedPost)
        } else {
            const newPost = {
                id: Date.now(),
                title: title,
                text: text,
                image: image,
            }
            addPost(newPost)
        }
        setTitle('');
        setText('');
        setImage('');
    }

    useEffect(() => {
        if (editPost) {
            setTitle(editPost.title)
            setText(editPost.text)
            setImage(editPost.image)
        }
    }, [editPost])

    return (
        <ContentContainer>
            <form onSubmit={onSubmit}>
                <div className="flex justify-between">
                    <div className="w-7/12">
                        <FormField>
                            <Input
                                label="Post name"
                                name='title'
                                type="text"
                                placeholder='enter post name'
                                value={title}
                                onChange={handleChangeTitle}
                            />
                        </FormField>
                        <FormField>
                            <Input
                                label="Image url"
                                name="image"
                                type="text"
                                placeholder='pass image url'
                                value={image}
                                onChange={handleChangeImage}
                            />
                        </FormField>
                    </div>
                    {image &&
                        <div
                            style={{
                                backgroundImage: `url(${image})`
                            }}
                            src={image}
                            alt="My image"
                            className="bg-cover bg-center bg-no-repeat w-40 h-40 rounded-md"
                        />
                    }
                </div>
                <TextArea
                    label="Description"
                    name="Post"
                    cols="80"
                    rows="5"
                    value={text}
                    placeholder='Tell us your story...'
                    onChange={handleChangeText}
                />
                <Button
                    type="submit"
                    variant="primary"
                    className="mt-6"
                >
                    {editPost ? 'Update' : 'Add'} post
                </Button>
            </form>
        </ContentContainer>
    );
}

export default EditPost;