<template>
  <div class="bg-white dark:bg-black">
    <div class="container mx-auto flex items-center">
      <div class="logo w-2/12 float-left">
        <nuxt-link to="/"><Logo class="w-full" /></nuxt-link>
      </div>
      <div class="menu w-10/12 float-left">
        <ul class="float-right flex items-center">
          <li class="float-left px-3 text-black dark:text-white">
            <nuxt-link :class="classlist" to="/characters"
              >Characters</nuxt-link
            >
          </li>
          <li class="float-left px-3 text-black dark:text-white">
            <nuxt-link :class="classlist" to="/episodes">Episodes</nuxt-link>
          </li>
          <li class="float-left px-3 text-black dark:text-white">
            <nuxt-link :class="classlist" to="/locations">Locations</nuxt-link>
          </li>
          <li class="float-left px-3 text-black dark:text-white">
            <a
              href="https://github.com/mkocerdev/rickandmorty"
              target="__blank"
            >
              <githubIcon class="w-8 text-black dark:text-white" />
            </a>
          </li>
          <li class="float-left px-3 text-black dark:text-white">
            <button class="flex items-center" @click="changeMode">
              <p
                class="flex items-center justify-center px-5 py-3 bg-gray-300 dark:bg-gray-900 rounded-full transition duration-300 ease outline-none"
              >
                <dark-icon
                  v-if="$colorMode.preference === 'light'"
                  class="w-6"
                />
                <light-icon v-else class="w-6" />
                <span class="pl-2"> {{ mode }} Mode </span>
              </p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import githubIcon from '~/components/icon/github'
import lightIcon from '~/components/icon/light'
import darkIcon from '~/components/icon/dark'
export default {
  components: {
    githubIcon,
    lightIcon,
    darkIcon,
  },
  data() {
    return {
      classlist: [''],
    }
  },
  computed: {
    mode() {
      return this.$colorMode.preference === 'light' ? 'Dark' : 'Light'
    },
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
}
</script>
