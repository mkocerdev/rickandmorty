import CHARACTER_QUERY from '~/apollo/queries/characters/character.gql'
import CHARACTER_LIST_QUERY from '~/apollo/queries/characters/characters.gql'
import CHARACTER_RANDOM_LIST_QUERY from '~/apollo/queries/characters/charactersByIds.gql'

export const state = () => ({
  character: null,
  characters: [],
  characterRandomList: [],
  randomNumbers: [],
})

export const getters = {
  characterRandomList(state) {
    return state.characterRandomList.data
  },
  characters(state) {
    return state.characters.data.characters
  },
  charactersTotalPage(state) {
    return state.characters.data.characters.info.pages
  },
  character(state) {
    return state.character.data.character
  },
}

export const actions = {
  async fetchCharacter({ commit }, id) {
    const client = this.app.apolloProvider.defaultClient
    const response = await client.query({
      prefetch: true,
      query: CHARACTER_QUERY,
      variables: { characterId: id },
    })
    commit('setCharacter', response)
  },
  async fetchCharacters({ commit }, page) {
    const client = this.app.apolloProvider.defaultClient
    const response = await client.query({
      prefetch: true,
      query: CHARACTER_LIST_QUERY,
      variables: { page },
    })
    commit('setCharacters', response)
  },
  async fetchCharacterRandom({ commit, state }) {
    if (state.randomNumbers.length < 1) {
      const qty = 4
      const min = 1
      const max = 587
      let rnd
      do {
        do {
          rnd = Math.floor(Math.random() * max) + min
        } while (state.randomNumbers.includes(rnd))
        commit('setRandomNumbers', rnd)
      } while (state.randomNumbers.length < qty)
    }
    const client = this.app.apolloProvider.defaultClient
    const response = await client.query({
      prefetch: true,
      query: CHARACTER_RANDOM_LIST_QUERY,
      variables: { ids: state.randomNumbers },
    })
    commit('setCharacterRandomList', response)
  },
}

export const mutations = {
  setCharacter(state, character) {
    state.character = character
  },
  setCharacters(state, characters) {
    state.characters = characters
  },
  setCharacterRandomList(state, randomCharacters) {
    state.characterRandomList = randomCharacters
  },
  setRandomNumbers(state, number) {
    state.randomNumbers.push(number)
  },
}
