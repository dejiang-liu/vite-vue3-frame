<template>
  <h1>{{userStore.name}}</h1>
  <button @click="changeName">change</button>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user';
const userStore = useUserStore()

const changeName = () => {
  userStore.updateName('kkk')
}
</script>