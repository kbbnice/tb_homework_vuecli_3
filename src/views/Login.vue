<template>
  <div class="login">
    <div class="login-wrap">
      <h1 class="login-title">影视首发资讯</h1>
      <div class="login-box">
        <div class="login-form">
          <!-- 用户名 -->
          <div class="login-item">
            <input
              type="text"
              id="uname"
              placeholder="username"
              v-model="formData.username"
            />
          </div>

          <!-- 密码 -->
          <div class="login-item">
            <input
              type="password"
              id="pwd"
              placeholder="password"
              v-model="formData.password"
            />
          </div>
        </div>

        <!-- 登录 -->
        <div class="login-btn" @click="submit()">登&nbsp;录</div>
      </div>
    </div>
  </div>
</template>

<script>

import {Message} from 'element-ui'

export default {
  name: "login",
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {},
  methods: {
    // 提交表单
    submit() {
      let that = this;

      // Mock
      that.Mock.mock("/login", {
        userInfo: {
          id: 1,
          name: "user",
        },
        state: "success",
      });

      //  登录请求
      that.$axios
        .post("/login", {
          username: that.formData.username,
          password: that.formData.password,
        })
        .then((res) => {
          // 登录成功：
          if (res.data.state === "success") {
            that.setStorage("userInfo", res.data.userInfo);
            Message({
              message: "登录成功",
              type: "success",
            });
            setTimeout(() => {
              that.$router.push("/");
            }, 500);
          } else {
            Message({
              message: "登录失败",
              type: "error",
            });
          }
        });
    },

    // 设置 localstorage:
    setStorage(key, value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.login {
  .login-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
    background: #50e2d5;
    z-index: 2;
    .login-title {
      color: #fff;
      font-size: 40px;
      line-height: 40px;
      position: relative;
      top: 120px;
      text-align: center;
    }
    .login-box {
      background: rgba(255, 255, 255, 0.7);
      width: 500px;
      height: 500px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 40px 70px 30px;
      .login-form {
        margin-top: 100px;
        margin-bottom: 80px;
        text-align: center;
        .login-item {
          margin-bottom: 46px;
          font-size: 16px;
          line-height: 22px;

          input {
            display: inline-block;
            width: 280px;
            height: 50px;
            padding: 0 10px;
            border-radius: 30px;
            background: transparent;
            border-bottom: 1px solid #999;
            &:focus {
              border-bottom: 1px solid #50e2d5;
            }
          }
        }
      }

      .login-btn {
        margin: 0 auto;
        background: #50e2d5;
        color: #fff;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        text-align: center;
        font-size: 16px;
        line-height: 40px;
        border-radius: 5px;
        width: 100px;
        cursor: pointer;
      }
    }
  }
}
</style>