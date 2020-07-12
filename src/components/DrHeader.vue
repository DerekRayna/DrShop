<template>
  <div class='header'>
      <div class="header-left">
          <slot name="left"></slot>
      </div>
      <div class="header-middle">
          <slot>标题</slot>
      </div>
      <div class="header-right">
          <slot name='right'></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    };
  },
  props: {

  },
  computed: {},
  watch: {},
  methods: {

  },
  created() {
      console.log(this.$slots)
  },
  mounted() {

  },
}
</script>

<style lang='scss' scoped>
.header{
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 42px;
    line-height: 42px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #fff;
    background-color: #3498db;
    vertical-align: middle;
    .header-left{
        
    }
    .header-middle{
        flex: 1;
        text-align: center;
    }
    .header-right{
        
    }
}
</style>