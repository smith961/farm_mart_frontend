export const ADD_TO_CART = id => {
    return {
        type: ADD_TO_CART,
        id
    };
};
export const REMOVE_FROM_CART = id => {
    return {
        type: REMOVE_FROM_CART,
        id,
    };
};
export const SUB_QUANTITY = id => {
    return {
        type: SUB_QUANTITY,
        id,
    };
};
export const ADD_QUANTITY = id => {
    return {
        type: ADD_QUANTITY,
        id,
    };
};
export const EMPTY_CART = id => {
    return {
        type: EMPTY_CART,
    };
};