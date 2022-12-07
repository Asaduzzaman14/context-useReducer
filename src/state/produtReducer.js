import { actioType } from "./actionTypes"

export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart: [],
    wishlist: []
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case actioType.FEATCHING_START:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case actioType.FEATCHING_SUCCES:
            return {
                ...state,
                loading: false,
                products: action.paylode,
                error: false,
            }

        case actioType.FEATCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case actioType.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.paylode]
            }

        case actioType.ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist, action.paylode]
            }
        case actioType.DELETE_TO_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product._id !== action.paylode)
            }


        default: {
            return state
        }
    }

}