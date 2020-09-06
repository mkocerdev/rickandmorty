<template>
  <div class="w-full inline-block mt-5">
    <div class="w-full inline-block">
      <div class="container mx-auto">
        <div class="w-full mb-5">
          <div
            class="w-full inline-flex items-end justify-between flex-wrap mb-3"
          >
            <h2 class="text-3xl font-bold text-black dark:text-white relative">
              Characters
            </h2>
            <nuxt-link
              class="float-right font-bold text-black dark:text-white underline bg-transparent"
              to="/characters"
              >All Characters</nuxt-link
            >
          </div>
          <div class="-mx-2 flex items-start flex-wrap">
            <div
              v-for="item in characters.charactersByIds"
              :key="item.id"
              class="w-6/12 md:w-4/12 lg:w-3/12 float-left p-2"
            >
              <character-list :data="item" />
            </div>
          </div>
        </div>
        <div class="w-full">
          <div
            class="w-full inline-flex items-end justify-between flex-wrap my-3"
          >
            <h2 class="text-3xl font-bold text-black dark:text-white relative">
              Episodes
            </h2>
            <nuxt-link
              class="float-right font-bold text-black dark:text-white underline bg-transparent"
              to="/episodes"
              >All Episodes</nuxt-link
            >
          </div>
          <div class="-mx-2 flex items-start flex-wrap">
            <div
              v-for="item in episodes.episodesByIds"
              :key="item.id"
              class="w-6/12 md:w-6/12 lg:w-6/12 float-left p-2"
            >
              <episode-list :data="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import characterList from '~/components/list/character'
import episodeList from '~/components/list/episode'
export default {
  components: {
    characterList,
    episodeList,
  },
  async asyncData({ route, params, error, store }) {
    try {
      await Promise.all([
        store.dispatch('characters/fetchCharacterRandom'),
        store.dispatch('episodes/fetchEpisodeRandom'),
      ])
    } catch (e) {
      error({
        statusCode: 404,
        message: e,
      })
    }
  },
  computed: {
    characters() {
      return this.$store.getters['characters/characterRandomList']
    },
    episodes() {
      return this.$store.getters['episodes/episodesRandom']
    },
  },
}
</script>
<style scoped>
.cover {
  height: 25rem;
}
</style>
