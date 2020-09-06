<template>
  <div class="error-500">
    <h1>An error occurred</h1>
    <p>{{ error }}</p>
  </div>
</template>
<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
