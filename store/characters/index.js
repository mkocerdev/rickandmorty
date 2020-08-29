import characterQuery from '~/apollo/queries/characters/character.gql'
import charactersListQuery from '~/apollo/queries/characters/list.gql'

export const state = () => ({
  character: null,
  characterList: [],
})

export const getters = {
  characterList(state) {
    return state.characterList
  },
  character(state) {
    return state.character
  },
}

export const actions = {
  async fetchCharacter({ commit }, id) {
    const client = this.app.apolloProvider.defaultClient
    const response = await client.query({
      prefetch: true,
      query: characterQuery,
      variables: { characterId: id },
    })
    commit('setCharacter', response.data)
  },
  async fetchCharacterList({ commit }) {
    const client = this.app.apolloProvider.defaultClient
    const response = await client.query({
      prefetch: true,
      query: charactersListQuery,
    })
    commit('setCharacterList', response.data.characters)
  },
}

export const mutations = {
  setCharacter(state, character) {
    state.character = character
  },
  setCharacterList(state, characters) {
    state.characterList = characters
  },
}
