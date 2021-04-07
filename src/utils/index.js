/*
 * @Description: body下挂载toast提示
 * @Author: 李昭
 * @Date: 2021-04-07 11:26:11
 * @LastEditTime: 2021-04-07 11:50:10
 * @LastEditors: 李昭
 */
import Vue from 'vue';

export default function create(component, props) {
  
  // 构建全局component实例
  var comp = Vue.extend(component);
  var vm = new comp({
    propsData: props
  }).$mount();
  document.body.appendChild(vm.$el);

  // 增加移除组件方法
  vm.remove = () => {
    document.body.removeChild(vm.$el);
    // vm执行死亡生命周期
    vm.$destroy()
  }
  return vm
}