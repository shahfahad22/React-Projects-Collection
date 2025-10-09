import { useCart } from "../Context/CartContext";

export default function ProductCard({product}){
    const {addToCart} = useCart()

    return(
        <div className="border rounded-xl p-4 flex flex-col mt-17">
            <img src={product.image} 
            alt={product.name}
            className="rounded-lg mb-3 h-40 object-cover" />
            <h2 className="font-bold">{product.name}</h2>
            <p className="text-gray-500">${product.price}</p>
            <button onClick={()=> addToCart(product)} className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">Add To Cart</button>
        </div>
    )
}