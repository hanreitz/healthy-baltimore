export const getStores = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_STORES'})
    fetch("https://opendata.baltimorecity.gov/egis/rest/services/Hosted/Grocery_Store_20210621/FeatureServer/0/query?where=1%3D1&outFields=latitude,longitude,address,storename,status&returnGeometry=false&outSR=4326&f=json")
    .then(resp => resp.json())
    .then(stores => {
      dispatch({
        type: 'ADD_STORES',
        stores: stores.features
      })
    })
  }
}

export const addFilter = filter => {
  return ({
    type: 'ADD_FILTER',
    filter: filter
  })
}

export const removeFilter = filter => {
  return ({
    type: 'REMOVE_FILTER',
    filter: filter
  })
}