<template>
  <template v-if="commonData.length">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>常用网站</span>
          <el-button class="button" type="text" @click="delCard('all')">清除所有记录</el-button>
        </div>
      </template>
      <div class="card-content">
        <el-card class="main-card" v-for="(card,index) in commonData" :key="index" shadow="hover"
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
          <el-button type="text" icon="el-icon-circle-close" class="del-btn" v-on:click.stop="delCard(card.title)">
          </el-button>
        </el-card>
      </div>
    </el-card>
  </template>
</template>

<script>
  import { defineComponent, computed } from 'vue';
  import { useStore } from 'vuex'
  import { ElMessageBox } from 'element-plus';
  import { ElMessage } from 'element-plus';

  export default defineComponent({

    setup() {
      const store = useStore()
      const commonData = computed(() => store.state.commonData)

      const handleClick = (value) => {
        store.commit('setCommonData', value.title)
      }

      const delCard = (value) => {
        const open = () => {
          ElMessageBox.confirm(value !== 'all' ? '删除该记录, 是否继续?' : '删除所有记录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          })
            .then(() => {
              store.commit('delCommonData', value)
              ElMessage({
                type: 'success',
                message: '删除成功!',
              });
            })
            .catch(() => {
              ElMessage({
                type: 'info',
                message: '已取消删除',
              });
            });
        };
        open()
      }

      return {
        commonData,
        handleClick,
        delCard
      }
    }
  })
</script>

<style lang="scss">
  .box-card {
    width: 60%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    .card-header {
      display: flex;
      justify-content: space-between;
    }

    .card-content {
      display: grid;
      column-gap: 5px;
      justify-content: space-between;
      align-content: flex-start;
      grid-template-columns: repeat(4, 1fr);

      .main-card {
        position: relative;

        .del-btn {
          width: 20px;
          position: absolute;
          top: -6px;
          right: 4px;
        }
      }
    }
  }

  .el-button--small {
    font-size: 16px;
  }

  .el-button--text {
    color: #cfc3c3;
  }


  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    .box-card {
      width: 80%;

      .card-content {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .box-card {
      width: 90%;

      .card-content {
        grid-template-columns: 1fr;
      }
    }
  }
</style>