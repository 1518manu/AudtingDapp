'use client'

import React from 'react';
import { Link } from 'react-router-dom';

const Sell = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Item submitted successfully!');
    };

    return (
        <div className="bg-cover bg-no-repeat bg-center min-h-screen" style={{ backgroundImage: 'url(img1.jpeg)', backgroundBlendMode: 'difference' }}>
            <header className="bg-gray-800 py-5">
                <div className="container mx-auto text-center">
                    <h1 className="text-white text-2xl">Auction House</h1>
                    <nav>
                        <ul className="flex justify-center space-x-4">
                            <li><Link to="/" className="text-white text-lg">Home</Link></li>
                            <li><Link to="/buy" className="text-white text-lg">Auctions</Link></li>
                            <li><Link to="/sell" className="text-white text-lg">Sell</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto py-10">
                <section className="bg-white p-10 rounded-lg shadow-md text-center relative">
                    <h2 className="text-3xl mb-4">Sell an Item</h2>
                    <form id="sellItemForm" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="itemName" className="block mb-2">Item Name:</label>
                            <input type="text" id="itemName" name="itemName" className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block mb-2">Description:</label>
                            <textarea id="description" name="description" className="w-full px-3 py-2 border rounded" required></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="startingPrice" className="block mb-2">Starting Price (ETH):</label>
                            <input type="number" id="startingPrice" name="startingPrice" step="0.01" className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="auctionEnd" className="block mb-2">Auction End Time:</label>
                            <input type="datetime-local" id="auctionEnd" name="auctionEnd" className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
                    </form>
                </section>
            </main>
            <footer className="bg-gray-800 py-5 text-center text-white">
                <div className="container mx-auto">
                    <p>&copy; 2024 Auction House. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Sell;
