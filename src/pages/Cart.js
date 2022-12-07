import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const Cart = () => {
    const { state: { cart, loading, error } } = useProducts()

    let content;
    if (loading) {
        content = <p>Loading....</p>
    }
    if (error) {
        content = <p>Somthing went wrong</p>
    }
    if (!error && !loading && cart.length === 0) {
        content = <p>Nothing to show Product is Empty</p>
    }

    if (!error && !loading && cart.length) {
        content = cart
            ?.map((product, index) =>
                <ProductCard key={product.index} product={product} button={<button>Delete</button>} />
            )
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            <h2 className='text-2xl'>This is Cart</h2>
            {
                content

            }

        </div>
    );
};

export default Cart;