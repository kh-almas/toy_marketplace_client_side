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
                        toys.map(info => <TableRow key={info._id} deleteToy={deleteToy} toys={info}></TableRow>)
                    }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                    <tr>
                        { tableHeader }
                    </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default Mytoy;