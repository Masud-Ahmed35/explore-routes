import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body, userId } = post;

    const navigate = useNavigate();
    const handleAuthor = () => {
        navigate(`/friends/${userId}`)
    }

    return (
        <div>
            <h1>------Post Details------</h1>
            <h2>Post-Id: {id}</h2>
            <h3>Post-Title: {title}</h3>
            <p>Body: {body}</p>
            <button onClick={handleAuthor}>Get The Author</button>
        </div>
    );
};

export default PostDetails;