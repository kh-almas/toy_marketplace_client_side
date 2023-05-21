import React, {Fragment, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";

const TableRow = ({toys}) => {
    const {age, brand, quantity, category, description, image, name, price, rating, sellerName, sellerEmail} = toys;
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    return (
        <>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="toy image" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>

                <td>{category}</td>
                <td>{brand}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{age}</td>
                <th>
                    <button onClick={openModal} className="btn btn-ghost btn-xs">details</button>
                </th>
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
                                            <figure><img src={image} alt="Shoes" className="h-[250px]" /></figure>
                                            <div className="card-body">
                                                <h2 className="text-center text-2xl font-bold">{name}</h2>

                                                <div className="grid grid-cols-2">
                                                    <div>
                                                        <p><span className="font-semibold">Category:</span> {category}</p>
                                                        <p><span className="font-semibold">Brand:</span> {brand}</p>
                                                        <p><span className="font-semibold">Price:</span> {price}</p>
                                                        <p><span className="font-semibold">rating:</span> {rating}</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p>{quantity} <span className="font-semibold">:quantity</span></p>
                                                        <p>{age} <span className="font-semibold">:age</span></p>
                                                        <p>{sellerName} <span className="font-semibold">:sellerName</span></p>
                                                        <p>{sellerEmail} <span className="font-semibold">:sellerEmail</span></p>
                                                    </div>
                                                </div>

                                                <p>description: {description}</p>
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
            </tr>
        </>
    );
};

export default TableRow;