<template>
  <section id="card-outer">
    <Aside />
    <main>
      <el-card class="main-card" v-for="(card,index) in cardsList" :key="index" shadow="hover"
        @click="handleClick(card)">
        <a :href="card.link" target="blank">
          <div class="main-card-content">
            <img :src="card.img" />
            <div class="main-card-content-info">
              <h3>{{card.title}}</h3>
              <p>{{card.desc}}</p>
            </div>
          </div>
        </a>
      </el-card>
    </main>
  </section>
</template>

<script>
  import { defineComponent, computed } from 'vue';
  import { useStore } from 'vuex'
  import Aside from './Aside.vue'

  export default defineComponent({
    components: {
      Aside,
    },
    setup() {
      const store = useStore()
      const cardsList = computed(() => store.state.mainData)

      const handleClick = (value) => {
        store.commit('setCommonData', value.title)
      }
      return {
        cardsList,
        handleClick
      }
    }
  })
</script>

<style lang="scss">
  #card-outer {
    display: flex;
    height: 100%;

    main {
      flex: 1;
      display: grid;
      column-gap: 5px;
      justify-content: space-between;
      align-content: flex-start;
      grid-template-columns: repeat(4, 1fr);
      padding: 20px;
    }

    @media only screen and (min-width: 1500px) {
      main {
        grid-template-columns: repeat(5, 1fr);
      }
    }

    @media only screen and (max-width: 1200px) {
      main {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media only screen and (max-width: 768px) {
      main {
        grid-template-columns: 1fr;
      }
    }

    &>section {
      flex: 8;
    }
  }

  .main-card {
    margin: 5px 0;
    cursor: pointer;
    overflow: hidden;
    height: 75px;

    a {
      text-decoration: none;
      color: #333;
      ;
    }

    .main-card-content {
      display: flex;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }

      .main-card-content-info {
        width: 90%;

        h3 {
          font-weight: normal;
          font-size: 14px;
        }

        p {
          font-size: 12px;
          color: #888ea2;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          line-height: 1.8;
        }
      }

      span {
        margin-left: 10px;
        text-decoration: none;

        &:nth-of-type(1) {
          font-size: 18px;
          font-weight: 700;
          color: #ffa502;
          white-space: nowrap;
        }

        &:nth-of-type(2) {
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
</style>