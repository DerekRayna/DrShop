<template>
  <div class="Dr-scroll-box">
    <div class="left-container" :style="{width: leftWidth}" ref="left">
      <div class="left-scroll-body" ref="leftUl">
        <div
          class="left-scroll-item"
          :style="{height: leftItemHeight}"
          :class="[{curIndex: index == curIndex }]"
          v-for="(item,index) of leftList"
          :key="item.title"
          @click="clickLeftToRight(index)"
        >{{item.title}}</div>
      </div>
    </div>
    <div class="right-container" ref="right">
      <div class="right-scroll-body" ref="rightContent">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  data() {
    return {
      curIndex: 0,
      tops: [0],
      lScroll: "",
      rScroll: "",
      rightTop: ""
    };
  },
  props: {
    leftWidth: {
      type: String,
      default: "60px"
    },
    leftItemHeight: {
      type: String,
      default: "36px"
    },
    leftList: {
      type: Array,
      default: function() {
        return [{ title: 1 }, { title: 2 }, { title: 3 }];
      }
    }
  },
  mounted() {
    this.initTops();
    this.lScroll = new BScroll(this.$refs.left, {
      scrollY: true,
      click: true,
      probeType: 2
    });
    this.rScroll = new BScroll(this.$refs.right, {
      scrollY: true,
      click: true,
      probeType: 2
    });
    this.rScroll.on("scroll", scrollNum => {
      this.rightTop = Math.abs(scrollNum.y); //计算右侧滚动高度
      console.log(this.rightTop);
      this.tops.forEach((item, index, arr) => {
        if (this.rightTop >= item && this.rightTop < arr[index + 1]) {
          this.curIndex = index;
        }
      });
    });
  },
  methods: {
    // 点击左侧选项，右侧内容自动轮动到对应位置
    clickLeftToRight(index) {
      console.log(index);
      this.curIndex = index;
      const y = -this.tops[index];
      this.rScroll.scrollTo(0, y, 1000);
    },
    //收集右侧滚动栏中每一项到顶部的高度
    initTops() {
      let top = 0;
      const lis = this.$refs.rightContent.children;
      [...lis].forEach(li => {
        top += li.clientHeight;
        this.tops.push(top);
      });
    }
  }
};
</script>

<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
}
.Dr-scroll-box {
  width: 100%;
  height: 100%;
  display: flex;
  .left-container {
    height: 100%;
    overflow: hidden;
    border: 1px solid #ccc;
    box-sizing: border-box;
    .left-scroll-body {
      width: 100%;
      height: 100%;
      .left-scroll-item {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .right-container {
    flex: 1;
    height: 100%;
    overflow: hidden;
    .right-scroll-body {
      width: 100%;
    }
  }
}
.curIndex {
  color: #fff;
  background-color: aqua;
}
</style>