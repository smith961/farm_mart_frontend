const initialState = {
    products: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products: [...state.products.map (product =>
                 product.id === action.id ? {...product,selected: true} : product,
                 ),
                ]
            };
        case DELETE_FROM_CART:
            return {
            ...state,
            products: state.products.map(product =>
                product.id === action.id
                ? {...product, selected: false, quantity: 1}
                :product,
                ),
            };
        case SUB_QUANTITY:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id? {
                        ...product,
                        quantity: product.quantity !== 1 ? product.quantity - 1 : 1
                    }
                    : product,
                    ),
            };
        case ADD_QUANTITY:
            return
    default:
        return state;
    }

};

export default rootReducer;