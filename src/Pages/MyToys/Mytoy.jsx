import React, {Fragment, useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../Providers/AuthProvider.jsx";
import TableRow from "./TableRow.jsx";
import {Link} from "react-router-dom";
import {Dialog, Popover, Transition} from "@headlessui/react";

const Mytoy = () => {
    const {user, setIsLoading} = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortByPrice, setSortBYPrice] = useState(0);
    const [message, setMessage] = useState('');
    const [isDelete, setISDelete] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [singleToys, setSingleToys] = useState({});

    useEffect(()=> {
        setIsLoading(true);
        fetch(`http://localhost:3000/my-toys/${user.email}/${sortByPrice}`)
            .then(res => res.json())
            .then(data => setToys(data))
        setIsLoading(false);
    },[user, sortByPrice, isDelete])

    const deleteToy = id =>{
        fetch(`http://localhost:3000/toy/${id}`,{
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // deletedCount
                if(data.deletedCount){
                    setMessage('Toy deleted');
                    setISDelete(!isDelete)
                }
            })
    }


    function closeModal() {
        setIsOpen(false)
    }

    function openModal(id) {
        setIsOpen(true);
        fetch(`http://localhost:3000/single/toys/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setSingleToys(data[0]);
            })
        // console.log(id);
    }

    const handelUpdateSubmit = (e) => {
        e.preventDefault();
    }

    const tableHeader = <>
        <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
        </th>
        <th>Name</th>
        <th>Category</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Age</th>
        <th>Actions</th>
    </>
    return (
        <div>
            <small className="dark:text-white text-gray-900">{ message }</small>
            <div className="flex justify-end mb-4">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button className={` ${open ? '' : 'text-opacity-90'} btn border-sky-500 group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                                Sort
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute  mt-3 -translate-x-1/2 transform px-4 sm:px-0 z-50 w-[122px]">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <ul className="relative gap-8 bg-base-100 p-2">
                                            <li className="my-4"><button onClick={() => setSortBYPrice(1)} className="btn py-1 border-sky-500">Low price</button></li>
                                            <li className="my-4"><button onClick={() => setSortBYPrice(-1)} className="btn py-1 border-sky-500">High price</button></li>
                                        </ul>

                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
            <div className="overflow-x-auto w-full -z-50">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        { tableHeader }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        toys.map(info => <TableRow key={info._id} openModal={openModal} deleteToy={deleteToy} toys={info}></TableRow>)
                    }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                    <tr>
                        { tableHeader }
                    </tr>
                    </tfoot>

                </table>
                <div>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center text-center">
                                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                        <Dialog.Panel className="w-full lg:w-2/5 sm:w-3/5  transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">



                                            <div className="flex items-center justify-center bg-cover bg-center min-h-screen">
                                                <div className="w-full p-8 text-gray-800 ">
                                                    <h2 className="text-2xl mb-4">Update toys</h2>
                                                    <form onSubmit={() => handelUpdateSubmit(singleToys?._id)}>
                                                        <div className="text-center">
                                                            <small className="text-white"></small>
                                                        </div>
                                                        <div className="mb-4">
                                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800" htmlFor="name">
                                                                Name
                                                            </label>
                                                            <input
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                                                id="name"
                                                                name="name"
                                                                defaultValue={singleToys?.name}
                                                                type="text"
                                                                placeholder="Enter your name"
                                                            />
                                                        </div>
                                                        <div className="grid md:grid-cols-3 gap-4">
                                                            <div className="mb-4">
                                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800" htmlFor="price">
                                                                    Price
                                                                </label>
                                                                <input
                                                                    className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                                                    id="price"
                                                                    name="price"
                                                                    defaultValue={singleToys?.price}
                                                                    type="number"
                                                                    placeholder="Set a price"
                                                                />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800" htmlFor="rating">
                                                                    Rating
                                                                </label>
                                                                <input
                                                                    className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                                                    id="rating"
                                                                    name="rating"
                                                                    defaultValue={singleToys?.rating}
                                                                    type="number"
                                                                    placeholder="Set ratings"
                                                                />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800" htmlFor="quantity">
                                                                    Quantity
                                                                </label>
                                                                <input
                                                                    className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                                                    id="quantity"
                                                                    name="quantity"
                                                                    defaultValue={singleToys?.quantity}
                                                                    type="number"
                                                                    placeholder="Set quantity"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="grid md:grid-cols-2 gap-4">
                                                            <div className="mb-4">
                                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800" htmlFor="brand">
                                                                    Brand
                                                                </label>
                                                                <input
                                                                    className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                                                    id="brand"
                                                                    name="brand"
                                                                    defaultValue={singleToys?.brand}
                                                                    type="text"
                                                                    placeholder="set a brand"
                                                                />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800" htmlFor="age">
                                                                    Age range
                                                                </label>
                                                                <input
                                                                    className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                                                    id="age"
                                                                    name="age"
                                                                    defaultValue={singleToys?.age}
                                                                    type="text"
                                                                    placeholder="Enter your toy buyer age range"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="mb-4">
                                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800" htmlFor="url">
                                                                Image
                                                            </label>
                                                            <input
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                                                id="url"
                                                                name="image"
                                                                defaultValue={singleToys?.image}
                                                                type="url"
                                                                placeholder="Enter your URL"
                                                            />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800" htmlFor="description">
                                                                Description
                                                            </label>
                                                            <textarea id="description" name="description" defaultValue={singleToys?.description} placeholder="Bio" className="textarea border textarea-md w-full rounded border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline" ></textarea>
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




                                            <div className="mt-4 flex justify-end mb-2 mr-2">
                                                <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={closeModal}>
                                                    Close
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </div>
    );
};

export default Mytoy;