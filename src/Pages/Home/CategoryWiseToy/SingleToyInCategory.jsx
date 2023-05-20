import React from 'react';

const SingleToyInCategory = ({item}) => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Album" className="w-48 h-full"/></figure>
                <div className="card-body -m-4">
                    <h2 className="card-title">{item.name}</h2>
                    <p>Category: {item.category}</p>
                    <p>Brand: {item.brand}</p>
                    <p>Price: {item.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn-sm rounded-lg btn-primary w-full">See more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyInCategory;