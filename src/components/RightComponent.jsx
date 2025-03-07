import React, { useEffect, useState } from 'react'
import Center from './Center'
import Chart from './Chart';

function RightComponent() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div className="w-[70%] rounded-l-lg p-2 bg-amber-50 flex flex-wrap h-screen  overflow-y-scroll gap-2 justify-evenly shadow-2xl">
                {error ? <p>Oops!, Error Occured....</p> : <Center loading={loading} products={products} />}
            </div>
            <div className="w-[30%] rounded-r-lg  bg-amber-100">
                <Chart products={products} />
            </div>
        </>
    )
}

export default RightComponent