const initialState = {
  stores: [],
  location: '',
  requesting: false
}

const rootReducer = (state, action) => {
  switch(action.type) {
    case 'LOADING_STORES':
      return {
        ...state,
        stores: [...state.stores],
        requesting: true
      }
    case 'ADD_STORES':
      return {
        ...state,
        stores: action.stores,
        requesting: false
      }
    case 'LOADING_LOCATION':
      return {
        ...state,
        location: state.location,
        requesting: true
      }
    case 'ADD_LOCATION':
      return {
        ...state,
        location: action.location,
        requesting: false
      }
    default:
      return state
  }
}