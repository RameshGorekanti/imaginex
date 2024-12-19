'use client'
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
        
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
            <div className="mb-4">
                
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='name'
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                
                <textarea
                    id="message"
                    name="message"
                    placeholder='Message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <button
                type="submit"
                className="inline-flex items-center px-6 py-2 bg-[#52c1ac] border border-transparent rounded-xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
            >
                Submit
            </button>
            </div>
        </form>
    );
};

export default ContactForm;