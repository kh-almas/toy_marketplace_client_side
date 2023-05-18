import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {Link} from "react-router-dom";

const PopoverLink = () => {
    return (
        <div className=" w-full max-w-sm">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className={` ${open ? '' : 'text-opacity-90'} group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
                            <Popover.Panel className="absolute left-[80px] z-10 mt-3 -translate-x-1/2 transform px-4 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <ul className="relative gap-8 bg-base-100 p-2">
                                            <li className="my-4"><Link to={'/'} className="py-1 border-solid border-b-2 border-sky-500">Home</Link></li>
                                            <li className="my-4"><a href='/' className="py-1 border-solid border-b-2 border-sky-500">All Toys</a></li>
                                            <li className="my-4"><a href='/' className="py-1 border-solid border-b-2 border-sky-500">My Toys</a></li>
                                            <li className="my-4"><a href='/' className="py-1 border-solid border-b-2 border-sky-500">Blogs</a></li>
                                            <li className="my-4"><a href='/' className="py-1 border-solid border-b-2 border-sky-500">Add Category</a></li>
                                            <li className="my-4"><a href='/' className="py-1 border-solid border-b-2 border-sky-500">Add Toy</a></li>
                                    </ul>

                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
};

export default PopoverLink;