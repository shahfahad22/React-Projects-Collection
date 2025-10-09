// import { createContext, useContext, useReducer } from "react";

// const CartContext = createContext();

// const initialState = {
//   cart: [],
// };

// function reducer({ state, action }) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const exist = state.cart.find((item) => item.id === action.payload.id);
//       if (exist) {
//         return {
//           ...state,
//           cart: state.cart.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       }
//       return {
//         ...state,
//         cart: [...state.cart, { ...action.payload, quantity: 1 }],
//       };

//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.payload),
//       };

//     case "INCREASE":
//       return {
//         ...state,
//         cart: state.cart.map((item) =>
//           item.id === action.payload
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       };
//     case "DECREASE":
//       return {
//         ...state,
//         cart: state.cart.map((item) =>
//           item.id === action.payload && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         ),
//       };
//     default:
//       return state;
//   }
// }

// export function CartProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const addToCart = (product) =>
//     dispatch({ type: "ADD_TO_CART", payload: product });
//   const removeFromCart = (id) =>
//     dispatch({ type: "REMOVE_FROM_CART", payload: id });
//   const increaseQty = (id) => dispatch({ type: "INCREASE", payload: id });
//   const decreaseQty = (id) => dispatch({ type: "DECREASE", payload: id });

//   return (
//     <CartContext.Provider
//       value={{ ...state, addToCart, removeFromCart, increaseQty, decreaseQty }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);

import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });
  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const increaseQty = (id) => dispatch({ type: "INCREASE", payload: id });
  const decreaseQty = (id) => dispatch({ type: "DECREASE", payload: id });

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
