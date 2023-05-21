import React, {Fragment, useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../Providers/AuthProvider.jsx";
import TableRow from "./TableRow.jsx";
import {Link} from "react-router-dom";
import {Popover, Transition} from "@headlessui/react";
import {Helmet} from "react-helmet";

const AllToy = () => {
    const {user, setIsLoadData} = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortByPrice, setSortBYPrice] = useState(0);
    const [isSearch, setIsSearch] = useState(false);

    useEffect(()=> {
        setIsLoadData(true)
        fetch(`https://cognitivewonders-production.up.railway.app/all-toys/${sortByPrice}`)
            .then(res => res.json())
            .then(data => setToys(data))
        setIsLoadData(false)
    },[user, sortByPrice, isSearch])
    console.log(toys);

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.search.value;
        if(text){
            fetch(`https://cognitivewonders-production.up.railway.app/search/${text}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setToys(data);
                });
        }else {
            setIsSearch(!isSearch);
        }
    };

    const tableHeader = <>
        <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
        </th>
        <th>Name</th>
        <th>Category</th>
        <th>Seller Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Age</th>
        <th>Actions</th>
    </>
    return (
        <div>
            <Helmet>
                <title>cognitivewonders | all-toys</title>
            </Helmet>
            <div className="flex justify-between">
                <div className="form-control">
                    <form onSubmit={handleSearch}>
                        <div className="input-group">
                            <input type="text" name="search" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </form>
                </div>
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
                        toys.map(info => <TableRow key={info._id} toys={info}></TableRow>)
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

export default AllToy;