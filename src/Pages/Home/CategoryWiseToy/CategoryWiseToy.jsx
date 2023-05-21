import React, {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SingleToyInCategory from "./SingleToyInCategory.jsx";

const CategoryWiseToy = () => {
    const [findCategoryData, setFindCategoryData] = useState('All');
    const [toy, setToy] = useState([]);

    const category = [
        {id: 1, name: "All"},
        {id: 2, name: "Science kits"},
        {id: 3, name: "Math learning toys"},
        {id: 4, name: "Engineering kits"},
        {id: 5, name: "Engineering tools"},
    ];

    useEffect(() => {
        fetch(`https://cognitivewonders-production.up.railway.app/category-toy/${findCategoryData}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [findCategoryData])

    return (
        <div className="mt-12">
            <h1 className="mb-8 text-2xl font-bold text-center mb-2 text-gray-800 dark:text-white">Show product by category</h1>
            <Tabs className="md:flex w-full">
                <div className="mr-12 text-center md:text-left">
                    <TabList>
                        {
                            category.map(item => <Tab key={item.id} onClick={() => setFindCategoryData(item.name)} className="py-1 my-2 pl-2 cursor-pointer">{item.name}</Tab>)
                        }
                    </TabList>
                </div>
                <div className="grow">
                    <div>
                        {
                            category.map(item =>
                                <TabPanel  key={item.id}>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
                                        {
                                            toy.map(item => <SingleToyInCategory key={item._id} item={item}></SingleToyInCategory>)
                                        }
                                    </div>
                                </TabPanel>)
                        }
                    </div>
                </div>
            </Tabs>
        </div>
    );
};
export default CategoryWiseToy;