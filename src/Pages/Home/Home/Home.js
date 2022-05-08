import React from 'react';
import Banner from '../Banner/banner';
import Contact from '../Contact/Contact';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <FeatureProduct></FeatureProduct>
            <Contact></Contact>

        </div>
    );
};

export default Home;