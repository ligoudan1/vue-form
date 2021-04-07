<!--
 * @Description: 表单项
 * @Author: 李昭
 * @Date: 2021-04-01 17:51:09
 * @LastEditTime: 2021-04-04 17:29:09
 * @LastEditors: 李昭
-->

<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p class="error" v-if="error">{{ error }}</p>
    <!-- <p>{{ form.rules[prop] }}</p> -->
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"], // 获取实例
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      error: "",
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    // 表单校验
    validate() {
      console.log("触发了校验");
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];
      console.log(rules, value);
      const schema = new Schema({ [this.prop]: rules });
      // 返回promise,全局统一处理
      return schema.validate({ [this.prop]: value }, (err) => {
        if (err) {
          this.error = err[0].message;
        } else {
          this.error = "";
        }
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
