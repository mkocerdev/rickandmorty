import EPISODES_QUERY from '~/apollo/queries/episodes/episode.gql'
import EPISODES_LIST_QUERY from '~/apollo/queries/episodes/episodes.gql'
import EPISODES_RANDOM_LIST_QUERY from '~/apollo/queries/episodes/episodesByIds.gql'

export const state = () => ({
  episode: null,
  episodes: [],
  episodesRandom: [],
  randomNumbers: [],
})

export const getters = {
  episodesRandom(state) {
    return state.episodesRandom.data
  },
  episodes(state) {
    return state.episodes.data.episodes
  },
  episodesTotalPage(state) {
    return state.episodes.data.episodes.info.pages
  },
  episode(state) {
    return state.episode.data.episode
  },
}

export const actions = {
  async fetchEpisode({ commit }, id) {
    const client = this.app.apolloProvider.defaultClient
    const response = await client.query({
      prefetch: true,
      query: EPISODES_QUERY,
      variables: { episodeId: id },
    })
    commit('setEpisode', response)
  },
  async fetchEpisodes({ commit }, page) {
    const client = this.app.apolloProvider.defaultClient
    const response = await client.query({
      prefetch: true,
      query: EPISODES_LIST_QUERY,
      variables: { page },
    })
    commit('setEpisodes', response)
  },
  async fetchEpisodeRandom({ commit, state }) {
    if (state.randomNumbers.length < 1) {
      const qty = 4
      const min = 1
      const max = 41
      let rnd
      do {
        do {
          rnd = Math.floor(Math.random() * max) + min
        } while (state.randomNumbers.includes(rnd))
        commit('setRandomNumbers', rnd)
      } while (state.randomNumbers.length < qty)

      const client = this.app.apolloProvider.defaultClient
      const response = await client.query({
        prefetch: true,
        query: EPISODES_RANDOM_LIST_QUERY,
        variables: { ids: state.randomNumbers },
      })
      commit('setEpisodeRandom', response)
    }
  },
}
export const mutations = {
  setEpisode(state, episode) {
    state.episode = episode
  },
  setEpisodes(state, episodes) {
    state.episodes = episodes
  },
  setEpisodeRandom(state, episodes) {
    state.episodesRandom = episodes
  },
  setRandomNumbers(state, number) {
    state.randomNumbers.push(number)
  },
}
