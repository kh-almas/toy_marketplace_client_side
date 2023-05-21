import React from 'react';

const Subscribe = () => {
    return (
        <div className="mt-20">
            <div className={`py-8 dark:bg-gray-900 bg-gray-100 `}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center dark:text-white text-gray-800">
                        <h2 className="text-3xl font-extrabold">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="mt-4 text-lg">
                            Stay up-to-date with our latest news, offers, and updates.
                        </p>
                    </div>
                    <div className="mt-10">
                        <form className="flex justify-center">
                            <div className="">
                                <div className="form-control">
                                    <div className="input-group">
                                        <input type="text" name="search" placeholder="Search…" className="input input-bordered" />
                                        <button className="btn btn-square w-[140px]">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;