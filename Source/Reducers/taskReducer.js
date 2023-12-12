const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                tasks: [...state.tasks, action.checkout]
            };
        case "DELETE_FROM_CART":
            return {
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.checkout)
            };
    default:
        return state;
    }

};

export default rootReducer;