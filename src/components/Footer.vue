<template>
  <footer>
    footer
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss">
  footer {
    background-color: #1d1e1f;
    color: #999;
    border-top: 1px solid #eee;
    text-align: center;
    line-height: 60px;
    align-self: flex-end;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    footer {
      padding: 0;
    }
  }
</style>