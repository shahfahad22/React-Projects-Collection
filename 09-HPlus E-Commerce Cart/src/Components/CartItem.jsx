import { useCart } from "../Context/CartContext";

export default function CartItem({item}){
    const {increaseQty, decreaseQty, removeFromCart} = useCart()

    return(
        <div className="flex justify-between items-center border-b py-3">
            <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>{item.price}</p>
            </div>
            <div className="flex items-center gap-2">
                <button onClick={()=> decreaseQty(item.id)} className="px-2 bg-gray-300 rounded">-</button>
                <button onClick={()=> increaseQty(item.id)} className="px-2 bg-gray-300 rounded">+</button>
            </div>
            <button onClick={()=> removeFromCart(item.id)}className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
        </div>
    )
}