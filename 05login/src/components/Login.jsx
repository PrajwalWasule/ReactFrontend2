import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            setUser({ username, password });
        }
    }

    // Check if both username and password are filled
    const isFormValid = username && password;

    return (
        <div className="bg-black p-6 rounded-md shadow-lg max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
                />
                <input 
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
                />
                <button 
                    type="submit"
                    className={`w-full p-2 rounded ${isFormValid ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-gray-600 text-gray-300 cursor-not-allowed'}`}
                    disabled={!isFormValid}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;
