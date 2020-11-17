<template>
  <div class="homepage">
    <div class="movie-list">
      <div class="movie-item" v-for="(item,index) in movieList" :key="item.uid">
        <div class="select">
          <el-button
            class="star-btn"
            type="warning"
            :icon="item.isLove ? 'el-icon-star-on' : 'el-icon-star-off'"
            circle
            @click="addLove(item, item.id, index)"
          ></el-button>
        </div>
        <img :src="item.img_url" alt="" />
        <p class="title">{{ item.title }}</p>
        <p class="title">价格：{{ item.price }}</p>
        <p class="title">上映：{{ item.time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "element-ui";
export default {
  data() {
    return {
      movieList: [
        {
          id: 1,
          img_url: require("@/assets/images/cover-1.png"),
          title: "电影标题啊",
          time: "2020-01-22",
          price: 20.2,
          isLove: false,
        },
        {
          id: 2,
          img_url: require("@/assets/images/cover-1.png"),
          title: "电影标题啊",
          time: "2020-01-22",
          price: 20.2,
          isLove: false,
        },
        {
          id: 3,
          img_url: require("@/assets/images/cover-1.png"),
          title: "电影标题啊",
          time: "2020-01-22",
          price: 20.2,
          isLove: false,
        },
        {
          id: 4,
          img_url: require("@/assets/images/cover-1.png"),
          title: "电影标题啊",
          time: "2020-01-22",
          price: 20.2,
          isLove: false,
        },
        {
          id: 5,
          img_url: require("@/assets/images/cover-1.png"),
          title: "电影标题啊",
          time: "2020-01-22",
          price: 20.2,
          isLove: false,
        },
        {
          id: 6,
          img_url: require("@/assets/images/cover-1.png"),
          title: "电影标题啊",
          time: "2020-01-22",
          price: 20.2,
          isLove: false,
        },
        {
          id: 8,
          img_url: require("@/assets/images/cover-1.png"),
          title: "电影标题啊",
          time: "2020-01-22",
          price: 20.2,
          isLove: false,
        },
      ],
    };
  },
  components: {
    [Button.name]: Button,
  },
  methods: {
    addLove(item, id, index) {
     this.movieList[index].isLove = true
      this.$store.dispatch("addStarItemsFun", {
        item,
        id,
      });
    },
  },
};
</script>


<style lang="less">
.homepage {
  .movie-list {
    .movie-item {
      display: inline-block;
      margin: 0 5px 20px;
      padding-bottom: 20px;
      position: relative;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.575);
      border-radius: 5px;
      .star-btn {
        position: absolute;
        top: 5px;
        right: 5px;
      }
      p {
        line-height: 20px;
        font-size: 12px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
      }
      img {
        width: 150px;
        margin-bottom: 5px;
      }
      &:hover {
        box-shadow: 0 0 10px rgb(21, 224, 224);
      }
    }
  }
}
</style>