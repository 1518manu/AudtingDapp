'use client'

import Link from 'next/link';
import React from 'react';
// import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(pexels-codioful-7130475.jpg)' }}>
            <header className="bg-gray-800 py-5">
                <div className="container mx-auto text-center">
                    <h1 className="text-white text-2xl">Auction House</h1>
                    <nav>
                        <ul className="flex justify-center space-x-4">
                            {/* <li><Link to="/login" className="text-white text-lg">Login</Link></li> */}
                            <Link href="/home" >Log in</Link>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="py-10">
                <section id="about" className="container mx-auto text-center">
                    <h2 className="text-3xl mb-4">About Us</h2>
                    <p className="text-lg max-w-xl mx-auto">Welcome to Auction House, the ultimate decentralized auction platform for buying and selling digital artifacts. Our platform connects sellers and buyers from all over the world.</p>
                </section>
                <section className="container mx-auto text-center mt-10">
                    <Link className="bg-orange-500 text-white py-3 px-6 rounded-md m-2" href ='/cell'>Sell</Link>
                    <Link className="bg-orange-500 text-white py-3 px-6 rounded-md m-2" href = '/buy'>Bid</Link>
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

export default Homepage;
