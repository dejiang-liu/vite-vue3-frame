<template>
  <a-layout class="basic-layout">
    <a-layout-sider class="basic-sider" v-model:collapsed="collapsed" :trigger="null" collapsible>
      <basicSiderVue :status="collapsed"></basicSiderVue>
    </a-layout-sider>
    <a-layout class="basic-body-content">
      <a-layout-header class="basic-header">
        <basicHeaderVue @setSiderWidth="setSiderWidth"></basicHeaderVue>
      </a-layout-header>
      <a-layout-content>
        <RouterView></RouterView>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import basicSiderVue from './components/basic-sider.vue';
import basicHeaderVue from './components/basic-header.vue';

let collapsed = ref<boolean>(false);

const setSiderWidth = (val: string) => {
  val === 'close' ? collapsed.value = true : collapsed.value = false;
  console.log('collapsed => ', collapsed.value)
}
</script>

<style lang="scss" scoped>
.basic-layout {
  width: 100%;
  height: 100vh;
  background: #fff;

  .basic-sider {
    background-color: #fff;
  }

  .basic-header {
    background-color: #fff;
    padding: 0 15px;
  }
}
</style>