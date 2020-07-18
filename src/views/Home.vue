<template>
  <div class="home-comtainer">
    <DrHeader>
      <template>
        <div class="homeHeaderSearch">
          <input type="text" />
        </div>
      </template>
      <template #right></template>
    </DrHeader>
    <div class="scroll-test">
      <DrScroll :leftList="leftList">
        <template>
          <div class="content-item">1</div>
          <div class="content-item">2</div>
          <div class="content-item">3</div>
          <div class="content-item">4</div>
          <div class="content-item">5</div>
          <div class="content-item">6</div>
          <div class="content-item">7</div>
        </template>
      </DrScroll>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
import DrHeader from "../components/DrHeader.vue";
import router from "../router";
import BScroll from "better-scroll";
import DrScroll from "@/components/DrScroll.vue";
export default {
  name: "Home",
  data() {
    return {
      leftList: [
        { title: "蔬菜" },
        { title: "水果" },
        { title: "烧烤" },
        { title: "烤鱼" },
        { title: "饮料" },
        { title: "夜宵" },
        { title: "热销" }
      ]
    };
  },
  methods: {},
  components: {
    DrHeader,
    DrScroll
  },
  created() {
    // router.replace({
    //   path: "/person"
    // });
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
// @import "@/assets/css/common.scss";
.home-comtainer {
  .homeHeaderSearch {
    width: 100%;
    height: 24px;
    border-radius: 50%px;
    overflow: hidden;
    input {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
.content-item {
  height: 300px;
}
.scroll-test {
  height: 400px;
}
</style>
