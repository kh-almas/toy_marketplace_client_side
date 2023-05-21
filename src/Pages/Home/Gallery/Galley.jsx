import React from 'react';

const Galley = () => {
    return (
        <div className="mt-20">
            <h1 className="text-2xl font-bold text-center mb-2 text-gray-800 dark:text-white">Gallery</h1>
            <p className="text-center  dark:text-white text-gray-800 mb-4">A collection of beautiful images</p>
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-full md:w-1/2 lg:w-1/12 p-2">
                    <div data-aos="flip-left" data-aos-duration="1000">
                        <img
                            src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
                            alt="Image 1"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-center mt-2 font-bold">Image 1</p>
                        <p className="text-center text-sm">Subtitle 1</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-3/12 p-2">
                    <div data-aos="flip-left" data-aos-duration="1000">
                        <img
                            src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
                            alt="Image 2"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-center mt-2 font-bold">Image 2</p>
                        <p className="text-center text-sm">Subtitle 2</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-4/12 p-2">
                    <div data-aos="flip-left" data-aos-duration="1000">
                        <img
                            src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
                            alt="Image 3"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-center mt-2 font-bold">Image 3</p>
                        <p className="text-center text-sm">Subtitle 3</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-3/12 p-2">
                    <div data-aos="flip-left" data-aos-duration="1000">
                        <img
                            src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
                            alt="Image 4"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-center mt-2 font-bold">Image 4</p>
                        <p className="text-center text-sm">Subtitle 4</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/12 p-2">
                    <div data-aos="flip-left" data-aos-duration="1000">
                        <img
                            src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
                            alt="Image 5"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-center mt-2 font-bold">Image 5</p>
                        <p className="text-center text-sm">Subtitle 5</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Galley;