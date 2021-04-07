<!--
 * @Description: from表单
 * @Author: 李昭
 * @Date: 2021-04-01 18:26:01
 * @LastEditTime: 2021-04-04 17:39:35
 * @LastEditors: 李昭
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      require: true,
    },
    rules: Object,
  },
  mounted() {
    console.log(this.model);
  },
  methods: {
    validate(cb) {
      // 执行所有的校验
      const tasks = this.$children
        .filter((item) => item.prop)
        .map((item) => item.validate());
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>

<style scoped>
</style>