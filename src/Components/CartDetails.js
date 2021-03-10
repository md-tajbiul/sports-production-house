import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CartDetails = () => {
    const {idLeague} = useParams();
    const [cart, setCart] = useState({});
    console.log(cart)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCart(data.leagues))
    }, [idLeague])
    return (
        <div>
            <h2>Hello, this is details page.</h2>
        </div>
    );
};

export default CartDetails;