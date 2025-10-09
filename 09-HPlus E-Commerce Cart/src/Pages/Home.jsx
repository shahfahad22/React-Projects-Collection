import { useEffect, useState } from "react";
import axiosClient from "../Api/axiosClient"
import ProductCard from "../Components/ProductCard";

export default function Home(){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axiosClient.get("/products/order/price")
        .then(res =>setProducts(res.data))
        .catch(res => console.error(err))
    },[])

    return(
        <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map(prod =>(
                <ProductCard key={prod.id} product={prod} />
            )
            )}
        </div>
    )
}