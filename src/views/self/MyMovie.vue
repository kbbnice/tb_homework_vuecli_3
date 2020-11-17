<template>
  <div class="my-movie">
      <div class="love-title">我喜欢的电影</div>
    <div class="movie-list" v-if="myMovieList.length > 0">
      <div class="movie-item" v-for="item in myMovieList" :key="item.uid">
        <img :src="item.img_url" alt="" />
        <p class="title">{{ item.title }}</p>
        <p class="title">价格：{{ item.price }}</p>
        <p class="title">上映：{{ item.time }}</p>
      </div>
    </div>
    <div class="no-data" v-else>
      暂时没有喜欢的电影哦！ 快去
      <span class="link" @click="toHome">首页</span> 挑选吧！
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myMovieList: this.$store.state.starItems || [],
    };
  },
  computed: {
    preMmyMovieList() {
      return this.$store.state.starItems;
    },
  },
  components: {},
  methods: {
      toHome() {
          this.$router.push('/homepage')
      }
  },
  created() {
    this.myMovieList = this.$store.state.starItems;
  },
};
</script>


<style lang="less">
.my-movie {
    .love-title {
        font-size: 30px;
        color: #888;
        margin: 10px 0 60px;
    }
  .movie-list {
    .movie-item {
      display: inline-block;
      margin: 0 5px 20px;
      padding-bottom: 20px;
      position: relative;
      box-shadow: 0 0 5px #000;
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
  .no-data {
    font-size: 30px;
    line-height: 50px;
    padding: 80px;
    text-align: center;
    .link {
      color: #50e2d5;
      cursor: pointer;
      &:hover {
        color: #09a598;
      }
    }
  }
}
</style>