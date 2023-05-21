import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../Providers/AuthProvider.jsx";
import {useParams} from "react-router-dom";

const UpdateToy = () => {
    const {id} = useParams();
    console.log(id);

    const [message, setMessage] = useState('');
    const [toys, setToys] = useState('');


    useEffect(()=> {
        fetch(`http://localhost:3000/single-toys/${id}`)
            .then(res => res.json())
            .then(data => setToys(data))
    },[])

    const handelSubmit = e => {
        e.preventDefault();
        setMessage('');
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const brand = form.brand.value;
        const age = form.age.value;
        const image = form.image.value;
        const description = form.description.value;

        if( name === ''){
            setMessage('Give a toy name');
        }

        if( price === ''){
            setMessage('Set a price for toy');
        }

        if( rating === ''){
            setMessage('Give toy ratings');
        }

        if( quantity === ''){
            setMessage('Give toy quantity');
        }

        if( brand === ''){
            setMessage('add your toys brand');
        }

        if( age === ''){
            setMessage('Add age');
        }

        if( image === ''){
            setMessage('Add a toy image');
        }

        if( description === ''){
            setMessage('Add a toy description');
        }

        const info = {name, price, rating, quantity, brand, age, image, description}

        fetch(`http://localhost:3000/update-toys/${toys._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    setMessage(`Toy updated`)
                }
                else{
                    setMessage('something is wrong');
                }
            })
        form.reset();

    }
    return (
        <div>
            <div className="flex items-center justify-center bg-cover bg-center min-h-screen">
                <div className="w-full p-8 text-gray-800 dark:text-gray-200">
                    <h2 className="text-2xl mb-4">Create toys</h2>
                    <form onSubmit={handelSubmit}>
                        <div className="text-center">
                            <small className="text-white">{ message }</small>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                id="name"
                                name="name"
                                defaultValue={toys.name}
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="price">
                                    Price
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                    id="price"
                                    name="price"
                                    defaultValue={toys.price}
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
                                    defaultValue={toys.rating}
                                    type="number"
                                    placeholder="Set ratings"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="quantity">
                                    Quantity
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                    id="quantity"
                                    name="quantity"
                                    defaultValue={toys.quantity}
                                    type="number"
                                    placeholder="Set quantity"
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
                                    defaultValue={toys.brand}
                                    type="text"
                                    placeholder="set a brand"
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
                                    defaultValue={toys.age}
                                    type="text"
                                    placeholder="Enter your toy buyer age range"
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
                                defaultValue={toys.image}
                                type="url"
                                placeholder="Enter your URL"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="description">
                                Description
                            </label>
                            <textarea id="description" name="description" defaultValue={toys.description} placeholder="Bio" className="textarea border textarea-md w-full rounded border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline" ></textarea>
                        </div>
                        <button
                            className="w-full bg-teal-900 text-white hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Update toy
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;