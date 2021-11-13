const getStores = () => {
  console.log('getting in')
  // reach out to Baltimore City Grocery Stores Dashboard for stores
  const storeURL = "https://opendata.baltimorecity.gov/egis/rest/services/Hosted/Grocery_Store_20210621/FeatureServer/0/query?where=1%3D1&outFields=latitude,longitude,address,storename,status&returnGeometry=false&outSR=4326&f=json"
  fetch(storeURL)
  .then(resp => resp.json())
  .then(json => console.log('function worked'))
}

const getLocation = () => {
  // get user's location, not sure how this works yet
}

getStores()