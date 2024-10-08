import axios from "axios";
import React, { useEffect, useState } from "react";
import ProudctCard from './ProudctCard';
import Search from "./Search";

function ProductLists({loading, setLoading}) {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState({
        category: "",
        title: ""
    })

    useEffect(() => {
        if (!products.length) {
            fetechProducts()
        }
    }, [products])

    async function fetechProducts() {
        const { data } = await axios.get("https://fakestoreapi.com/products")
        setProducts(data);
    }

    function handleChange(e) {
        setQuery({ ...query, [e.target.name]: e.target.value })
    }

    return (
        <React.Fragment>
        <Search query={query} handleChange={handleChange} />
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {products.map((product, index) => <ProudctCard index={index} product={product} />)}
        </section>
        </React.Fragment>
    );
}
export default ProductLists;