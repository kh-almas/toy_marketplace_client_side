import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../Providers/AuthProvider.jsx";
import TableRow from "./TableRow.jsx";

const Mytoy = () => {
    const {user, setIsLoading} = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(()=> {
        setIsLoading(true);
        fetch(`http://localhost:3000/my-toys/${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
        setIsLoading(false);
    },[user])

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

export default Mytoy;