import React from 'react';
import Banner from "./Banner/Banner.jsx";
import CategoryWiseToy from "./CategoryWiseToy/CategoryWiseToy.jsx";
import {Helmet} from "react-helmet";
import Subscribe from "./Subscribe/Subscribe.jsx";
import Galley from "./Gallery/Galley.jsx";
import Testimonial from "./Testimonial/Testimonial.jsx";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>cognitivewonders | Home</title>
            </Helmet>
            <Banner />
            <CategoryWiseToy />
            <Galley />
            <Testimonial />
            <Subscribe />
        </div>
    );
};

export default Home;