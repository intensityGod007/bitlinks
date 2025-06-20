"use client";
import React, { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generate, setGenerate] = useState(false);

    const handleChange = () => {}

    return (
        <div className='flex flex-col items-center gap-5 p-5 m-8 bg-purple-100 mx-auto max-w-lg rounded-lg'>
            <h1 className='font-bold text-3xl'>Generate your short URL</h1>
            <div className='flex flex-col gap-4 mb-4 min-w-full'>
                <input
                    className='p-2 bg-gray-100 rounded-lg focus: outline-purple-300'
                    type="text"
                    name="url"
                    id="url"
                    placeholder='Enter your URL'
                    value={url}
                    onChange={e => {setUrl(e.target.value)}}
                />
                <input
                    className='p-2 bg-gray-100 rounded-lg focus: outline-purple-300'
                    type="text"
                    name="shortUrl"
                    id="shortUrl"
                    placeholder='Enter your preferred short URL'
                    value={shortUrl}
                    onChange={e => {setShortUrl(e.target.value)}}
                />
                <button className='bg-purple-400 text-white rounded-lg shadow-lg font-bold px-3 py-1 cursor-pointer hover:bg-purple-300'>Generate</button>
            </div>
        </div>
    )
}

export default Shorten