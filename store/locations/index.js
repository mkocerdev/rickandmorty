import LOCATION_QUERY from '~/apollo/queries/locations/location.gql'
import LOCATIONS_LIST_QUERY from '~/apollo/queries/locations/locations.gql'

export const state = () => ({
  location: null,
  locations: [],
})

export const getters = {
  location(state) {
    return state.location.data.location
  },
  locations(state) {
    return state.locations.data.locations
  },
  locationsTotalPage(state) {
    return state.locations.data.locations.info.pages
  },
}

export const actions = {
  async fetchLocation({ commit }, id) {
    const client = this.app.apolloProvider.defaultClient
    const response = await client.query({
      prefetch: true,
      query: LOCATION_QUERY,
      variables: { locationId: id },
    })
    commit('setLocation', response)
  },
  async fetchLocations({ commit }, page) {
    const client = this.app.apolloProvider.defaultClient
    const response = await client.query({
      prefetch: true,
      query: LOCATIONS_LIST_QUERY,
      variables: { page },
    })
    commit('setLocations', response)
  },
}
export const mutations = {
  setLocation(state, location) {
    state.location = location
  },
  setLocations(state, locations) {
    state.locations = locations
  },
}
