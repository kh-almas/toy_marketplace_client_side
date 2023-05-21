import React from 'react';

const Testimonial = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-10 mt-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800 dark:text-white">Testimonials</h2>
                <p className="text-center mb-6 dark:text-white text-gray-800">What our clients are saying</p>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-gray-300 dark:bg-gray-700 rounded-lg p-6 shadow">
                            <div className="mb-4">
                                <img className="w-12 h-12 rounded-full mx-auto" src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="Testimonial 1" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">John Doe</h3>
                            <p className="text-teal-900 dark:text-teal-500">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi risus. Sed iaculis tincidunt velit."</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-gray-300 dark:bg-gray-700 rounded-lg p-6 shadow">
                            <div className="mb-4">
                                <img className="w-12 h-12 rounded-full mx-auto" src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="Testimonial 2" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Jane Smith</h3>
                            <p className="text-teal-900 dark:text-teal-500">"Suspendisse euismod arcu a metus euismod, a iaculis nunc dignissim. Donec ac lorem quis libero porttitor."</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-gray-300 dark:bg-gray-700 rounded-lg p-6 shadow">
                            <div className="mb-4">
                                <img className="w-12 h-12 rounded-full mx-auto" src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="Testimonial 3" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Sarah Johnson</h3>
                            <p className="text-teal-900 dark:text-teal-500">"Curabitur efficitur gravida augue, ut facilisis ex blandit sit amet. Nam eget nulla auctor, commodo elit et, rutrum urna."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
