import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/webp;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                       New Movie Dilwale
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs.999</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}