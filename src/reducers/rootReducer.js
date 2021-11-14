const initialState = {
  stores: [],
  filters: [],
  location: '',
  requesting: false
}

const rootReducer = (state = initialState, action) => {
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
    case 'ADD_FILTER':
      return {
        ...state,
        filters: [...state.filters, action.filter],
        requesting: false
      }
    case 'REMOVE_FILTER':
      const filterInd = state.filters.indexOf(action.filter)
      if(filterInd === 0) return { ...state, filters: [...state.filters.splice(1)] }
      if(filterInd === state.filters.length - 1) return { ...state, filters: [...state.filters.splice(0, filterInd)] }
      return {
        ...state,
        filters: [...state.filters.splice(0, filterInd), ...state.filters.splice(filterInd + 1)]
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

export default rootReducer