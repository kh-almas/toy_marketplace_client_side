import React, {Fragment, useContext, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {AuthContext} from "../../../Providers/AuthProvider.jsx";
import {useNavigate} from "react-router-dom";

const SingleToyInCategory = ({item}) => {
    const { user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        if(user){
            setIsOpen(true);
        }else {
            console.log(user);
            setIsOpen(false);
            navigate('/login', { state: { message: 'You have to log in first to view details' } });
        }

    }
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Album" className="w-48 h-full"/></figure>
                <div className="card-body -m-4">
                    <h2 className="card-title">{item.name}</h2>
                    <p>Category: {item.category}</p>
                    <p>Brand: {item.brand}</p>
                    <p>Price: {item.price}</p>
                    <p>Rating: {item.rating}</p>
                    <div className="card-actions justify-end">
                        <button onClick={openModal} className="btn-sm rounded-lg btn-primary w-full">See more</button>
                    </div>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full lg:w-2/5 sm:w-3/5  transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    <div className="card text-black">
                                        <figure><img src={item.image} alt="Shoes" className="h-[250px]" /></figure>
                                        <div className="card-body">
                                            <h2 className="text-center text-2xl font-bold">{item.name}</h2>

                                            <div className="grid grid-cols-2">
                                                <div>
                                                    <p><span className="font-semibold">Category:</span> {item?.category}</p>
                                                    <p><span className="font-semibold">Brand:</span> {item?.brand}</p>
                                                    <p><span className="font-semibold">Price:</span> {item?.price}</p>
                                                    <p><span className="font-semibold">rating:</span> {item?.rating}</p>
                                                </div>
                                                <div className="text-end">
                                                    <p>{item?.quantity} <span className="font-semibold">:quantity</span></p>
                                                    <p>{item?.age} <span className="font-semibold">:age</span></p>
                                                    <p>{item?.sellerName} <span className="font-semibold">:sellerName</span></p>
                                                    <p>{item?.sellerEmail} <span className="font-semibold">:sellerEmail</span></p>
                                                </div>
                                            </div>

                                            <p>description: {item?.description}</p>
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
        </>
    );
};

export default SingleToyInCategory;