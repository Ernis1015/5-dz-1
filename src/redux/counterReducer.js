const initialState = {
	count: 0,
  };
  

  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';
  const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';
  const DECREMENT_BY_AMOUNT = 'DECREMENT_BY_AMOUNT';
  const RESET = 'RESET';
    
  export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
	  case INCREMENT:
		return { ...state, count: state.count + 1 };
	  case DECREMENT:
		return { ...state, count: Math.max(0, state.count - 1) };
	  case INCREMENT_BY_AMOUNT:
		return { ...state, count: state.count + action.payload };
	  case DECREMENT_BY_AMOUNT:
		return { ...state, count: Math.max(0, state.count - action.payload) };
	  case RESET:
		return { ...state, count: 0 };
	  default:
		return state;
	}
  };
  
  export const increment = () => ({ type: INCREMENT });
  export const decrement = () => ({ type: DECREMENT });
  export const incrementByAmount = (amount) => ({ type: INCREMENT_BY_AMOUNT, payload: amount });
  export const decrementByAmount = (amount) => ({ type: DECREMENT_BY_AMOUNT, payload: amount });
  export const reset = () => ({ type: RESET });