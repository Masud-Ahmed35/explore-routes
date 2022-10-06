import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const { name, phone, email, address } = friend;

    return (
        <div>
            <h1>This Component is for Friend Details.</h1>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><span>Phone: {phone}</span></p>
            <p><span>Address: {address.street}, {address.city}</span></p>
        </div>
    );
};

export default FriendDetails;