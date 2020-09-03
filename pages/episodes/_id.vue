<template>
  <div>
    {{ episode }}
  </div>
</template>

<script>
export default {
  async asyncData({ route, params, error, store }) {
    try {
      await store.dispatch('episodes/fetchEpisode', params.id)
    } catch (e) {
      error({
        statusCode: 404,
        message: e,
      })
    }
  },
  computed: {
    episode() {
      return this.$store.getters['episodes/episode']
    },
  },
}
</script>
