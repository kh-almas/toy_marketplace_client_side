import React, {useState} from 'react';
import GoogleAuth from "../Shared/SocialAuth/Google/GoogleAuth.jsx";
import {Link} from "react-router-dom";

const CreateToy = () => {
    const [error, setError] = useState('');
    const handelSubmit = e => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const category = form.category.value;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brand = form.brand.value;
        const age = form.age.value;
        const image = form.image.value;
        const description = form.description.value;

        if(category === 'disabled'){
            setError('Select a category');
        }

        if( name === ''){
            setError('Give a toy name');
        }

        if( price === ''){
            setError('Set a price for toy');
        }

        if( rating === ''){
            setError('Give toy ratings');
        }

        if( brand === ''){
            setError('add your toys brand');
        }

        if( age === ''){
            setError('Add age');
        }

        if( image === ''){
            setError('Add a toy image');
        }

        if( description === ''){
            setError('Add a toy description');
        }

        const info = {category, name, price, rating, brand, age, image, description}

        console.log(info);

    }
    return (
        <div>
            <div className="flex items-center justify-center bg-cover bg-center min-h-screen">
                <div className="w-full p-8 text-gray-800 dark:text-gray-200">
                    <h2 className="text-2xl mb-4">User Registration</h2>
                    <form onSubmit={handelSubmit}>
                        <div className="text-center">
                            <small className="text-white">{ error }</small>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="category">
                                Category
                            </label>
                            <select name="category" className="select select-bordered w-full" id="category">
                                <option value="disabled">Select a category</option>
                                <option value="Science kits">Science kits</option>
                                <option value="Math learning toys">Math learning toys</option>
                                <option value="Engineering kits">Engineering kits</option>
                                <option value="Engineering tools">Engineering tools</option>
                            </select>

                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="price">
                                    Price
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                    id="price"
                                    name="price"
                                    type="number"
                                    placeholder="Set a price"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="rating">
                                    Rating
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                    id="rating"
                                    name="rating"
                                    type="number"
                                    placeholder="Set ratings"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="brand">
                                    Brand
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                    id="brand"
                                    name="brand"
                                    type="text"
                                    placeholder="set a price"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="age">
                                    Age range
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                    id="age"
                                    name="age"
                                    type="text"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="url">
                                Image
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                id="url"
                                name="image"
                                type="url"
                                placeholder="Enter your URL"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="description">
                                Description
                            </label>
                            <textarea id="description" name="description" placeholder="Bio" className="textarea border textarea-md w-full rounded border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline" ></textarea>
                        </div>
                        <button
                            className="w-full bg-teal-900 text-white hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add a toy
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateToy;