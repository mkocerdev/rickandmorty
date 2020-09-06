<template>
  <div
    class="w-full float-left rounded-lg overflow-hidden relative border bg-white dark:bg-dark dark:border-gray-900 flex items-center"
  >
    <nuxt-link :to="'/episodes/' + data.id" class="w-full flex">
      <div class="w-full float-left text-left p-5">
        <p class="text-sm text-black dark:text-white">
          {{ data.episode }}
        </p>
        <h2 class="font-bold text-xl text-black dark:text-white">
          {{ data.name }}
        </h2>
        <div class="w-full mt-5">
          <p class="text-sm text-gray-600">Episode Air Date</p>
          <p class="text-black dark:text-white">{{ data.air_date }}</p>
        </div>
        <div class="w-full mt-5">
          <p class="text-sm text-gray-600">
            {{ data.characters.length }} characters appear in the episode.
          </p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 4px #2d3848;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: black;
}
</style>
