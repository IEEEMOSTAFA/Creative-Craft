import React from 'react';
import  { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
// import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Estate from '../Estate/Estate';
import Banner from '../Banner/Banner';

const Home = () => {

    const [estates, setEstates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch estates data from the public directory
    useEffect(() => {
        fetch('/catagory.json') // Fetch from public directory
            .then((response) => response.json())
            .then((data) => {
                setEstates(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading estates: {error.message}</div>;
    }



    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            {/* <Estate estates={estates} /> */}
            <Estate estates={estates}></Estate>
            <Footer></Footer>


        </div>
    );
};

export default Home;