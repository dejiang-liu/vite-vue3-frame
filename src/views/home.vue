<template>
  <div class="home-content">
    <h1>{{title}}</h1>
    <h2 class="color-1">lslsls</h2>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let title = ref('hello world')
</script>
<style lang="scss" scoped>
.color-1 {
  color: $bg-color;
}
</style>