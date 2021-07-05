<template>
  <aside>
    <el-col>
      <el-menu default-active="0" :style="{width:'200px'}" background-color="rgb(238, 238, 238)">
        <el-menu-item :index="index.toString()" v-for="(item, index) in asideData" :key="index"
          @click="handleSelect(item)">
          <i class="el-icon-menu"></i>
          <span>{{ item }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </aside>
</template>

<script>
  import { defineComponent, computed } from 'vue';
  import { useStore } from 'vuex'

  export default defineComponent({
    name: 'Aside',
    setup() {
      const store = useStore()

      return {
        asideData: computed(() => store.state.asideData),
        handleSelect(value) {
          store.commit('setMainData', value)
        },
      }
    },
  })
</script>

<style lang="scss">
  aside {
    width: 200px;
    background-color: rgb(238, 238, 238);
  }

  @media screen and (max-width: 768px) {
    aside {
      display: none;

      &.active {
        display: block;
      }
    }
  }
</style>