<template>
  <div id="app">
    <DrHeader>
      <template #left>
        <div class="drHeaderSlotLeft" @click="goBack"><</div>
      </template>
      <template #default>
        <div class="drHeaderSlotDefault">首页</div>
      </template>
      <template #right>
        <div class="drHeaderSlotRight">注册</div>
      </template>
    </DrHeader>
    <transition name="routerTra" mode="out-in">
      <router-view />
    </transition>
    <DrTabbar :tabList="tabList"></DrTabbar>
  </div>
</template>
<script>
import DrHeader from "@/components/DrHeader.vue";
import DrTabbar from "@/components/DrTabbar.vue";
export default {
  data() {
    return {
      tabList: [
        { title: "首页", icon: "", route: "/" },
        { title: "搜索", icon: "", route: "/search" },
        { title: "订单", icon: "", route: "/order" },
        { title: "我的", icon: "", route: "/person" }
      ]
    };
  },
  components: {
    DrHeader,
    DrTabbar
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  padding: 42px 0 50px 0;
  overflow: hidden;
  .routerTra-enter-active {
    transition: all 0.3s ease;
  }
  .routerTra-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .routerTra-enter,
  .routerTra-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }
  .drHeaderSlotLeft {
    font-size: 20px;
  }
}
</style>
