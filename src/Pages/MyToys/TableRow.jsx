import React, {Fragment, useContext, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {AuthContext} from "../../Providers/AuthProvider.jsx";
import {Link, useNavigate} from "react-router-dom";

const TableRow = ({toys, deleteToy}) => {
    const {_id, age, brand, quantity, category, description, image, name, price, rating} = toys;

    const { user } = useContext(AuthContext);




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
                    <button className="btn btn-ghost btn-xs">details</button>
                    <Link to={`/single-toy/${_id}`} className="btn btn-ghost btn-xs">update</Link>
                    <button onClick={() => deleteToy(_id)} className="btn btn-danger btn-xs">delete</button>
                </th>

            </tr>

        </>
    );
};

export default TableRow;