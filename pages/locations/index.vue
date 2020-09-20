<template>
  <div class="w-full mt-5">
    <div class="container mx-auto px-2">
      <h1 class="text-3xl my-3 font-bold text-dark dark:text-white relative">
        Locations
      </h1>
      <div class="-mx-2 inline-block">
        <div class="w-full float-right flex items-start flex-wrap">
          <div
            v-for="item in locations.results"
            :key="item.id"
            class="w-6/12 md:w-4/12 lg:w-6/12 float-left p-2"
          >
            <location-list :data="item" />
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
import locationList from '~/components/list/location'
import pagination from '~/components/list/pagination'
export default {
  components: {
    locationList,
    pagination,
  },
  watchQuery: ['page'],
  async asyncData({ route, params, error, store, query }) {
    const page = +query.page || 1
    try {
      await Promise.all([store.dispatch('locations/fetchLocations', page)])
    } catch (e) {
      error({
        statusCode: 404,
        message: 'This page not found. Detail:' + e,
      })
    }
  },
  data() {
    return {
      title: 'Locations',
    }
  },
  computed: {
    locations() {
      return this.$store.getters['locations/locations']
    },
    totalPage() {
      return this.$store.getters['locations/locationsTotalPage']
    },
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
