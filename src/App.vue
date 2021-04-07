<!--
 * @Description: 完整表单组件
 * @Author: 李昭
 * @Date: 2021-04-01 16:51:42
 * @LastEditTime: 2021-04-07 11:51:17
 * @LastEditors: 李昭
-->
<template>
  <div id="app">
    <Lform :model="msg" :rules="rules" ref="formData">
      <LformItem label="账号" prop="name">
        <Linput v-model="msg.name" :placeholder="placeVal" />
      </LformItem>
      <LformItem label="密码" prop="password">
        <Linput v-model="msg.password" :placeholder="placeVal" />
      </LformItem>
      <LformItem>
        <button @click="toLogin">登录</button>
      </LformItem>
    </Lform>
  </div>
</template>

<script>
import Linput from "./components/Linput.vue";
import LformItem from "@/components/LformItem.vue";
import Lform from "@/components/Lform.vue";
import Notice from "@/components/Notice.vue"; // 引入弹框组件
import create from "@/utils";

export default {
  name: "App",
  components: {
    Linput,
    LformItem,
    Lform,
  },
  data() {
    return {
      msg: {
        name: "",
        password: "",
      },
      placeVal: "请输入内容",
      rules: {
        name: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  methods: {
    toLogin() {
      this.$refs.formData.validate((isValid) => {
        if (isValid) {
          create(Notice, {
            title: "标题",
            message: "登录成功",
          }).show();
        } else {
          create(Notice, {
            title: "标题",
            message: "登录失败",
          }).show();
        }
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
