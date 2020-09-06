<template>
  <div class="w-full mt-5">
    <div class="container mx-auto px-2">
      <h1 class="text-3xl my-3 font-bold text-dark dark:text-white relative">
        Characters
      </h1>
      <div class="-mx-2 inline-block">
        <div class="w-full float-right flex items-start flex-wrap">
          <div
            v-for="item in characters.results"
            :key="item.id"
            class="w-6/12 md:w-4/12 lg:w-3/12 float-left p-2"
          >
            <character-list :data="item" />
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
import characterList from '~/components/list/character'
import pagination from '~/components/list/pagination'
export default {
  components: {
    characterList,
    pagination,
  },
  watchQuery: ['page'],
  async asyncData({ route, params, error, store, query }) {
    const page = +query.page || 1
    try {
      await store.dispatch('characters/fetchCharacters', page)
    } catch (e) {
      error({
        statusCode: 404,
        message: 'This page not found. Detail:' + e,
      })
    }
  },
  computed: {
    characters() {
      return this.$store.getters['characters/characters']
    },
    totalPage() {
      return this.$store.getters['characters/charactersTotalPage']
    },
  },
}
</script>
