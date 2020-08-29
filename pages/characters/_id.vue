<template>
  <div>
    {{ character }}
  </div>
</template>

<script>
export default {
  async asyncData({ route, params, error, store }) {
    try {
      await store.dispatch('characters/fetchCharacter', params.id)
    } catch (e) {
      error({
        statusCode: 404,
        message: e,
      })
    }
  },
  computed: {
    character() {
      return this.$store.getters['characters/character']
    },
  },
}
</script>
