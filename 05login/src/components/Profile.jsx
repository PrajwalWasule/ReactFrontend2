import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    // Conditionally render based on whether the user is logged in
    return (
        <div className="text-center mt-4">
            {user ? (
                <div className="text-green-500">Welcome {user.username}</div>
            ) : (
                <div className="text-red-500">Please login</div>
            )}
        </div>
    );
}

export default Profile;
