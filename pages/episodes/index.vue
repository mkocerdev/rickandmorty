<template>
  <div class="w-full mt-5">
    <div class="container mx-auto px-2">
      <h1 class="text-3xl my-3 font-bold text-dark dark:text-white relative">
        Episodes
      </h1>
      <div class="w-full inline-block">
        <div class="-mx-2 flex items-start flex-wrap">
          <div
            v-for="item in episodes.results"
            :key="item.id"
            class="w-6/12 md:w-4/12 lg:w-4/12 float-left p-2"
          >
            <episode-list :data="item" />
          </div>
          <div class="w-full float-left text-center my-5">
            <pagination :total-page="totalPage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import episodeList from '~/components/list/episode'
import pagination from '~/components/list/pagination'
export default {
  components: {
    episodeList,
    pagination,
  },
  watchQuery: ['page'],
  async asyncData({ route, params, error, store, query }) {
    const page = +query.page || 1
    try {
      await store.dispatch('episodes/fetchEpisodes', page)
    } catch (e) {
      error({
        statusCode: 404,
        message: 'This page not found. Detail:' + e,
      })
    }
  },
  computed: {
    episodes() {
      return this.$store.getters['episodes/episodes']
    },
    totalPage() {
      return this.$store.getters['episodes/episodesTotalPage']
    },
  },
}
</script>
