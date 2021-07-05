<template>
  <section id="search">
    <div class="search-sources" style="margin-bottom: 10px;">
      <span size="mini" type="primary" v-for="(item, index) in source" @click="changeSource(item.name)" :key="index"
        :style="`background:${item.color};border-color:${item.color}`">{{ item.name }}
      </span>
    </div>
    <div class="searchbox" :class="searchbarStyle.className">
      <el-input :placeholder="searchbarStyle.placeholder" v-model="searchValue" clearable v-on:keyup.enter="submit" />
      <el-button type="primary" icon="el-icon-search" @click="submit">搜索</el-button>
    </div>
  </section>
  <common-use />
</template>

<script>
  import commonUse from './commonUse'

  export default {
    components: {
      commonUse
    },
    data: () => ({
      baseUrl: 'https://www.baidu.com/s?ie=UTF-8&wd=',
      searchValue: '',
      searchbarStyle: {
        className: 'baidu',
        placeholder: '百度一下，你就知道',
      },
      source: [
        {
          name: '百度',
          color: '#2932E1',
        },
        {
          name: '搜狗',
          color: '#FF6F17',
        },
        {
          name: 'Bing',
          color: '#0c8484',
        },
        {
          name: 'Google',
          color: '#4285F4',
        },
        {
          name: 'NPM',
          color: '#EA4335',
        },
      ],
    }),
    methods: {  // 可以在 vue3 中使用 options API
      changeSource(name) {
        const actions = new Map([
          [
            '百度',
            () => {
              this.baseUrl = 'https://www.baidu.com/s?ie=UTF-8&wd='
              this.searchbarStyle = {
                className: 'baidu',
                placeholder: '百度一下，你就知道',
              }
            },
          ],
          [
            'Bing',
            () => {
              this.baseUrl = 'https://cn.bing.com/search?FORM=BESBTB&q='
              this.searchbarStyle = {
                className: 'bing',
                placeholder: '必应搜索',
              }
            },
          ],
          [
            '搜狗',
            () => {
              this.baseUrl = 'https://www.sogou.com/web?query='
              this.searchbarStyle = {
                className: 'sougou',
                placeholder: '搜狗搜索',
              }
            },
          ],
          [
            'Google',
            () => {
              this.baseUrl = 'https://www.google.com/search?q='
              this.searchbarStyle = {
                className: 'google',
                placeholder: 'Google Search',
              }
            },
          ],
          [
            'NPM',
            () => {
              this.baseUrl = 'https://www.npmjs.com/search?q='
              this.searchbarStyle = {
                className: 'npm',
                placeholder: 'Search Packages',
              }
            },
          ],
        ])
        actions.get(name)()
      },
      submit() {
        const url = this.baseUrl + this.searchValue
        window.open(url)
      },
    },
  }
</script>

<style lang="scss">
  #search {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: stretch;
    margin: 0 auto;
    height: 40vh;
    width: 40%;
    padding-bottom: 10vh;

    &>div {
      display: flex;
    }
  }

  .search-sources {
    span {
      margin-right: 0.5rem;
      padding: 0.4rem 0.6rem;
      color: #fff;
      font-size: 14px;
      line-height: 14px;
      border-radius: 2px;
      cursor: pointer;

      &:hover {
        filter: contrast(80%);
        transition: 0.3s;
      }
    }
  }

  .searchbox {
    padding-left: 1rem;
    height: 2.6rem;
    border-radius: 6px;
    background-color: #fff;
    border: 1px #ccc solid;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;

    input {
      flex: 1;
      border: none;
      font-size: 1rem;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }

    button {
      flex: 1;

      i {
        margin-right: 0;
      }
    }
  }

  $sources-color: (baidu: #2932e1,
    bing: #0c8484,
    sougou: #ff6f17,
    google: #4285f4,
    npm: #ea4335,
  );

  $source-list: baidu bing sougou google npm;

  @each $source in $source-list {
    .#{$source} {
      &:hover {
        border-color: map-get($sources-color, $source);
        box-shadow: 0 2px 4px map-get($sources-color, $source);
        transition: all 0.5s;
      }

      input {
        &:hover {
          border-color: map-get($sources-color, $source);
        }
      }

      button {
        background-color: map-get($sources-color, $source);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    #search {
      width: 80%;
    }
  }

  @media screen and (max-width: 768px) {
    #search {
      width: 90%;
    }
  }
</style>