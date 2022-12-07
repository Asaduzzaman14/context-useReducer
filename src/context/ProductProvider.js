import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { actioType } from "../state/actionTypes";
import { initialState, productReducer } from "../state/produtReducer";

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {


    const [state, dispatch] = useReducer(productReducer, initialState)
    console.log(state);

    useEffect(() => {
        dispatch({ type: actioType.FEATCHING_START })

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => dispatch({
                type: actioType.FEATCHING_SUCCES,
                paylode: data.data
            }))
            .catch(() => {
                dispatch({ type: actioType.FEATCHING_ERROR })
            })
    }, [])

    const value = {
        state,
        dispatch
    }
    // console.log(value);
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    )

}

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    // console.log(context);
    return context;
};

export default ProductProvider;