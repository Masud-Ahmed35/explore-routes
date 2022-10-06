import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, body, title } = post;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div className='post'>
            <h4>Post-Title: {title}</h4>
            <p>Body: {body}</p>
            <Link to={`/posts/${id}`}>Visit: {id}</Link>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show Details-2</button>
        </div>
    );
};

export default Post;