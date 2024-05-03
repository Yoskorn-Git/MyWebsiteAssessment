'use client'
import React, { useState } from 'react';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const mockSubmit = () => {
        setIsLoading(ture)
        setTimeout(2000)

        alert('Form data submitted successfully');
        setIsLoading(false)
        console.log(name, email, message);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });

                    try {
                        const response = await fetch('https://6628663354afcabd0735a488.mockapi.io/api/v1/interview/contactus', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                email,
                                message,
                                lat: position.coords.latitude.toString(),
                                lng: position.coords.longitude.toString(),
                                name
                            })
                        });

                        if (!response.ok) {
                            throw new Error('Failed to submit message');
                        }

                        alert('Message submitted successfully');
                        setIsLoading(false);
                    } catch (error) {
                        alert('Error submitting message:', error);
                        setIsLoading(false);
                    }
                },
                (error) => {
                    alert('Error getting user location:', error);
                    setIsLoading(false);
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
            setIsLoading(false);
        }
    };

    return (
        <>
            <title>Yoskorn | Contact Us</title>
            <div className="page_container bg-[#2e011d]">

                <div className='shadow-2xl p-8 pt-10 rounded-lg bg-white'>
                    <h1 className="text-3xl font-bold text-center text-[#6C0345]">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="w-[400px]">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                rows="4"
                            />
                        </div>
                        {isLoading ? <button type="submit" className="cursor-not-allowed bg-gray-400 w-full text-white py-2 px-4 rounded">Submitting ..</button>
                            : <button type="submit" className="bg-[#6C0345] w-full text-white py-2 px-4 rounded hover:bg-[#DC6B19]">Submit</button>}
                    </form>
                </div>


                <div className="flex justify-center space-x-5 mt-5">
                    <a href="https://discordapp.com/users/240822066272534528" target="_blank" rel="noopener noreferrer">
                        <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/CDCDCD/discord-logo.png" alt="discord-logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/yoskorn/" target="_blank" rel="noopener noreferrer">
                        <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/CDCDCD/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="https://github.com/Yoskorn-Git" target="_blank" rel="noopener noreferrer">
                        <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/CDCDCD/github.png" alt="github" />
                    </a>
                </div>
            </div>
        </>

    );
}

export default ContactUs;
