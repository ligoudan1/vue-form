<!--
 * @Description: input组件
 * @Author: 李昭
 * @Date: 2021-04-01 16:51:42
 * @LastEditTime: 2021-04-04 17:36:16
 * @LastEditors: 李昭
-->
<template>
  <div>
    <input :type="type" :value="value" @input="inputChange" v-bind="$attrs" />
  </div>
</template>



<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    inputChange(e) {
      this.$emit("input", e.target.value);

      // 
      this.$parent.$emit('validate')
    },
  },
};
</script>