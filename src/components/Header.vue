<template>
  <header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="home" @click="handleSelect('home')">首页</el-menu-item>
      <el-menu-item index="tools" @click="handleSelect('tools')">工具</el-menu-item>
      <el-menu-item index="docs" @click="handleSelect('docs')">文档</el-menu-item>
      <el-menu-item index="community" @click="handleSelect('community')">社区</el-menu-item>
    </el-menu>
    <template v-if="activeIndex !== 'home'">
      <MobileMenu />
    </template>
  </header>
</template>

<script>
  import { defineComponent, ref, watch } from 'vue';
  import { useStore } from 'vuex'
  import { useRouter, useRoute } from 'vue-router'
  import MobileMenu from './MobileMenu.vue'

  export default defineComponent({
    components: {
      MobileMenu,
    },

    setup() {
      const store = useStore()
      const router = useRouter()
      const route = useRoute()
      const activeIndex = ref('home');

      const actions = {
        tools: '前端工具',
        docs: 'vue',
        community: '博客'
      }

      const handleSelect = item => {
        activeIndex.value = item
        if (item === 'home') {
          router.replace({ name: 'home' })
        } else {

          router.push({ name: 'cards', params: { class: item } })
        }
      }

      watch(
        () => route.params,
        param => {
          param.class ? activeIndex.value = param.class : activeIndex.value = "home"
          store.commit('setMainData', actions[param.class])
          store.commit('setAsideData', param.class)
        }
      )

      return {
        activeIndex,
        handleSelect,
      }
    },
  })
</script>

<style lang="scss">
  header {
    display: flex;
    height: 60px;
    align-content: stretch;
    padding: 0 9.5rem;
    background-color: #545c64;
  }

  @media screen and (max-width: 768px) {
    header {
      padding: 0;
    }
  }
</style>