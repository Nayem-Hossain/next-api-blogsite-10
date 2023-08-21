import React from 'react';

const contact = () => {
    return (
        <section
            id="contact_form"
            className="min-h-screen bg-gradient-to-r from-[#212428] via-[#1a1d20] to-[#15171a] dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 "
        >
            <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
                <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                    <div className="text-white lg:w-1/2 lg:mx-6">
                        <h1 className="text-3xl font-semibold capitalize lg:text-4xl">
                           
                        </h1>
                    </div>

                    <div className="mt-8 lg:w-1/2 lg:mx-6">
                        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-[#191d24] lg:max-w-xl">
                            <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">
                                Contact form
                            </h1>

                            <form className="mt-6">
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Full Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your name"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#191d24] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>

                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Email address
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="Enter your email"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#191d24] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Websites
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Websites"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#191d24] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>

                                <div className="w-full mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-[#191d24] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        placeholder="Message"
                                    ></textarea>
                                </div>

                                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-[#2361ff] to-[#07f7f7] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                    Submit <i className="fa-solid fa-paper-plane ml-1"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default contact;