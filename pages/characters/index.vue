<template>
  <div class="container">
    <div class="w-full">
      <div
        v-for="item in characters.results"
        :key="item.id"
        class="w-6/12 float-left p-3"
      >
        <div
          class="w-full float-left rounded-lg overflow-hidden relative border bg-white flex items-center"
        >
          <nuxt-link :to="'/characters/' + item.id" class="w-full">
            <div class="w-4/12 float-left">
              <img :src="item.image" />
            </div>
            <div class="w-8/12 float-left text-left p-5">
              <p class="text-sm">
                <span
                  class="w-3 h-3 inline-block rounded-full mr-1"
                  :class="
                    item.status === 'Alive'
                      ? 'bg-green-500'
                      : item.status === 'Dead'
                      ? 'bg-red-500'
                      : 'bg-gray-500'
                  "
                ></span>
                {{ item.status }}
              </p>
              <h2 class="font-bold text-xl">{{ item.name }}</h2>
              <p class="text-sm">{{ item.species }} - {{ item.gender }}</p>
              <div class="w-full mt-5">
                <p class="text-sm text-gray-600">Origin location</p>
                <p class="">{{ item.origin.name }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ route, params, error, store }) {
    try {
      await store.dispatch('characters/fetchCharacterList')
    } catch (e) {
      error({
        statusCode: 404,
        message: e,
      })
    }
  },
  computed: {
    characters() {
      return this.$store.getters['characters/characterList']
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
