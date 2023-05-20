import React from 'react';

const TableRow = ({toys}) => {
    const {age, brand, category, description, image, name, price, rating} = toys;
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
                </th>
            </tr>
        </>
    );
};

export default TableRow;