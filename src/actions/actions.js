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

//signup action 

export const signup = (userData) => {
    return async (dispatch) => {
      try {        
        const response = await fetch('//put the i', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (response.ok) {
          dispatch({ type: 'SIGNUP_SUCCESS' });
          console.log('User signed up successfully!');
        } else {
          dispatch({ type: 'SIGNUP_FAILURE', error: 'Failed to sign up. Please try again.' });
          console.error('Failed to sign up:', response.statusText);
        }
      } catch (error) {
        dispatch({ type: 'SIGNUP_FAILURE', error: 'An error occurred. Please try again.' });
        console.error('Error during signup:', error.message);
      }
    };
  };
  