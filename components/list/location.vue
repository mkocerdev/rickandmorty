<template>
  <div
    class="w-full float-left rounded-lg overflow-hidden relative border bg-white dark:bg-dark dark:border-gray-900 flex items-center"
  >
    <nuxt-link :to="'/locations/' + data.id" class="w-full">
      <div class="w-full float-left text-left p-5">
        <h2 class="font-bold text-xl text-black dark:text-white">
          {{ data.name }}
        </h2>
        <div class="w-full mt-5">
          <p class="text-sm text-gray-600">Type</p>
          <p class="text-black dark:text-white">{{ data.type }}</p>
        </div>
        <div class="w-full mt-5">
          <p class="text-sm text-gray-600">Dimension</p>
          <p class="text-black dark:text-white">{{ data.dimension }}</p>
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
