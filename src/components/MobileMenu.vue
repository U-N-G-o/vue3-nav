<template>
  <section id="mobile-menu">
    <div id="navbarBurger" class="navbar-burger burger" data-target="navMenuMore" :class="{active}" @click="sideToggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>
</template>

<script>
  export default {
    data: () => ({
      active: false,
    }),
    methods: {
      sideToggle() {
        this.active = !this.active
        const classList = document.querySelectorAll('aside')[0].classList
        this.active ? classList.add('active') : classList.remove('active')
      },
    },
  }
</script>

<style lang="scss">
  #mobile-menu {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 999999;
  }

  @media screen and (max-width: 768px) {
    #mobile-menu {
      display: block;

      .navbar-burger {
        position: relative;
        color: #835656;
        cursor: pointer;
        height: 60px;
        width: 60px;
        margin-left: auto;

        span {
          background-color: #efefef;
          display: block;
          height: 1px;
          left: calc(50% - 8px);
          position: absolute;
          transform-origin: center;
          transition-duration: 86ms;
          transition-property: background-color, opacity, transform;
          transition-timing-function: ease-out;
          width: 16px;

          &:nth-child(1) {
            top: calc(50% - 6px);
          }

          &:nth-child(2) {
            top: calc(50% - 1px);
          }

          &:nth-child(3) {
            top: calc(50% + 4px);
          }
        }

        &.active {
          span {
            &:nth-child(1) {
              transform: translateY(5px) rotate(45deg);
            }

            &:nth-child(2) {
              opacity: 0;
            }

            &:nth-child(3) {
              transform: translateY(-5px) rotate(-45deg);
            }
          }
        }
      }
    }
  }
</style>