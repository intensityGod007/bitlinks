"use client";
import React, { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generate, setGenerate] = useState(false);

    const generateUrl = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUrl("")
                setShortUrl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

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
                    onChange={e => { setUrl(e.target.value) }}
                />
                <input
                    className='p-2 bg-gray-100 rounded-lg focus: outline-purple-300'
                    type="text"
                    name="shortUrl"
                    id="shortUrl"
                    placeholder='Enter your preferred short URL'
                    value={shortUrl}
                    onChange={e => { setShortUrl(e.target.value) }}
                />
                <button
                    onClick={generateUrl}
                    className='bg-purple-400 text-white rounded-lg shadow-lg font-bold px-3 py-1 cursor-pointer hover:bg-purple-300'
                >Generate</button>
            </div>
        </div>
    )
}

export default Shorten