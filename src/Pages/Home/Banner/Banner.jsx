import React from 'react';
import {Link} from "react-router-dom";

const Banner = () => {
    return (
        <div className="pb-8 bg-gray-100 dark:bg-gray-900 mt-22">
            <div className="mx-auto flex flex-col items-center">
                <h1 className="text-4xl text-gray-800 dark:text-white font-bold mb-4">
                    Discover the World of Learning Fun!
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center">
                    <div className="p-4">
                        <img
                            className="mx-auto h-40 rounded-lg w-[165px] h-[190px]"
                            src="https://static-01.daraz.com.bd/p/94ed0583fe528554e7d88d814115b0a8.jpg_720x720.jpg_.webp"
                            alt="Educational Toy 1"
                        />
                        <p className="text-lg text-gray-800 dark:text-white text-center mt-2">
                            Toy 1
                        </p>
                    </div>
                    <div className="p-4">
                        <img
                            className="mx-auto h-40 rounded-lg w-[165px] h-[190px]"
                            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1633016315-41dheNQX30L._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
                            alt="Educational Toy 2"
                        />
                        <p className="text-lg text-gray-800 dark:text-white text-center mt-2">
                            Toy 2
                        </p>
                    </div>
                    <div className="p-4">
                        <img
                            className="mx-auto h-40 rounded-lg w-[165px] h-[190px]"
                            src="https://www.businessinsider.in/thumb/msid-78061161,width-640,resizemode-4/Master.jpg"
                            alt="Educational Toy 3"
                        />
                        <p className="text-lg text-gray-800 dark:text-white text-center mt-2">
                            Toy 3
                        </p>
                    </div>
                    <div className="p-4">
                        <img
                            className="mx-auto h-40 rounded-lg w-[165px] h-[190px]"
                            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1633016315-41dheNQX30L._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
                            alt="Educational Toy 2"
                        />
                        <p className="text-lg text-gray-800 dark:text-white text-center mt-2">
                            Toy 4
                        </p>
                    </div>
                    <div className="p-4 ">
                        <img
                            className="mx-auto h-40 rounded-lg w-[165px] h-[190px]"
                            src="https://static-01.daraz.com.bd/p/94ed0583fe528554e7d88d814115b0a8.jpg_720x720.jpg_.webp"
                            alt="Educational Toy 1"
                        />
                        <p className="text-lg text-gray-800 dark:text-white text-center mt-2">
                            Toy 5
                        </p>
                    </div>
                </div>
                <Link to={'/all-toys'} className="bg-blue-700 text-white hover:bg-blue-800 font-bold rounded-full py-2 px-8 mt-8">
                    Shop Now
                </Link>
            </div>
        </div>
    );
};

export default Banner;
