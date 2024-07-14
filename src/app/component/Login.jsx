'use client'

import React, { useState } from 'react';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            navigate('/dashboard');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl text-center mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2">Username:</label>
                        <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">Password:</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
