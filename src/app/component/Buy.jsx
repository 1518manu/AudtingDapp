import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Buy = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [bidAmount, setBidAmount] = useState(0);

    const products = [
        {
            id: 'product1',
            name: 'Product Name 1',
            description: 'Description of Product 1.',
            startingPrice: '0.5 ETH',
            currentBid: '0.5 ETH',
            auctionEnds: '2024-07-20 18:00',
            bidHistory: ['0.5 ETH by User1'],
            img: 'https://via.placeholder.com/150',
        },
        {
            id: 'product2',
            name: 'Product Name 2',
            description: 'Description of Product 2.',
            startingPrice: '1.0 ETH',
            currentBid: '1.0 ETH',
            auctionEnds: '2024-07-22 15:00',
            bidHistory: ['1.0 ETH by User2'],
            img: 'https://via.placeholder.com/150',
        },
    ];

    const openBidModal = (product) => {
        setCurrentProduct(product);
        setModalVisible(true);
    };

    const closeBidModal = () => {
        setModalVisible(false);
        setCurrentProduct(null);
    };

    const submitBid = (e) => {
        e.preventDefault();
        if (parseFloat(bidAmount) > parseFloat(currentProduct.currentBid.split(' ')[0])) {
            const newBidHistory = [...currentProduct.bidHistory, `${bidAmount} ETH by User`];
            const updatedProduct = { ...currentProduct, currentBid: `${bidAmount} ETH`, bidHistory: newBidHistory };
            setCurrentProduct(updatedProduct);
            setModalVisible(false);
            alert('Bid placed successfully!');
        } else {
            alert('Your bid must be higher than the current highest bid.');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-gray-800 py-5">
                <div className="container mx-auto text-center">
                    <h1 className="text-white text-2xl">Auction House</h1>
                    <nav>
                        <ul className="flex justify-center space-x-4">
                            <li><Link to="/" className="text-white text-lg">Home</Link></li>
                            <li><Link to="/sell" className="text-white text-lg">Sell</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto py-10">
                <section>
                    <h2 className="text-3xl text-center mb-10">Available Items</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {products.map(product => (
                            <div key={product.id} className="bg-white p-5 rounded-lg shadow-md text-center">
                                <img src={product.img} alt={product.name} className="mx-auto mb-4 rounded" />
                                <h3 className="text-2xl mb-2">{product.name}</h3>
                                <p>{product.description}</p>
                                <p>Starting Price: {product.startingPrice}</p>
                                <p>Current Highest Bid: <span className="font-bold">{product.currentBid}</span></p>
                                <p>Auction Ends: {product.auctionEnds}</p>
                                <button onClick={() => openBidModal(product)} className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">Place Bid</button>
                                <div className="mt-4 text-left">
                                    <h4 className="font-bold">Bid History</h4>
                                    <ul className="list-disc list-inside">
                                        {product.bidHistory.map((bid, index) => <li key={index}>{bid}</li>)}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <footer className="bg-gray-800 py-5 text-center text-white">
                <div className="container mx-auto">
                    <p>&copy; 2024 Auction House. All rights reserved.</p>
                </div>
            </footer>

            {modalVisible && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-5 rounded-lg shadow-md w-96">
                        <span onClick={closeBidModal} className="absolute top-2 right-2 cursor-pointer text-gray-500">&times;</span>
                        <h2 className="text-2xl mb-4">Place Your Bid</h2>
                        <p className="mb-4">{currentProduct?.name}</p>
                        <form onSubmit={submitBid}>
                            <div className="mb-4">
                                <label htmlFor="bidAmount" className="block mb-2">Bid Amount (ETH):</label>
                                <input type="number" id="bidAmount" name="bidAmount" step="0.01" className="w-full px-3 py-2 border rounded" required onChange={(e) => setBidAmount(e.target.value)} />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit Bid</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Buy;
