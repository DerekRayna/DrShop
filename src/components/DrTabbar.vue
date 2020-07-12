<template>
  <div class="Tabbar">
    <div
      v-for="item of tabList"
      :key="item.route"
      class="Tabbar-item"
      :class="[{'isActived': item.route == $route.path}]"
      @click="toPage(item.route)"
    >
      <i class="tabbar-item-icon">1</i>
      <span class="tabbar-item-title">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      active: false,
    };
  },
  props: {
    tabList: {
      type: Array,
      default: []
    }
  },
  computed: {},
  watch: {
    isActived() {
      return;
    }
  },
  methods: {
    toPage(theRoute) {
      this.$router.push({ path: `${theRoute}` });
    }
  },
  created() {},
  mounted() {},
  updated() {},
  components: {}
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common.scss";
.Tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-top: 1px solid #ddd;
  display: flex;
  background-color: #fff;
  font-size: 14px;
  .Tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .isActived {
    color: $mainColor;
  }
}
</style>