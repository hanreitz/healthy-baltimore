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

const getMap = () => {
  // get map from google
}