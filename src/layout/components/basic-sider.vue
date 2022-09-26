<template>
  <div class="">
    <div class="basic-sider">
      <div class="basic-sider-header flex-center">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yingyongfenlei"></use>
        </svg>
        <div class="header-title flex-center" :style="{ width: status ? 0 : '100px' }">companyname</div>
      </div>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline" @openChange="openChange"
      @select="selectItem" style="height: 100%">
      <a-sub-menu v-for="(item) in routerArr" :key="item.path">
        <template #title>
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#'+item.meta.icon"></use>
          </svg>
          <span v-if="!status">{{ item.meta.title }}</span>
        </template>
        <a-menu-item v-for="submenu in item.children" :key="submenu.path">
          {{ submenu.meta.title }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>

</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import { modulesRouter, routerArr } from '@/router'
import { useRouter } from 'vue-router';

const props = defineProps({
  status: {
    type: Boolean,
    default: true,
    required: true,
  }
});

let status = computed(() => {
  return props.status;
});

const router = useRouter();
onMounted(() => {
  console.log('modulesRouter => ', routerArr)
})
const selectedKeys2 = ref<string[]>(['2']);
let openKeys = ref<string[]>(['sub1']);

const openChange = (val: string[]) => {
  if (val.length > 0) {
    const key: string = val[val.length - 1];
    openKeys.value = [key]
  }
}
const selectItem = (val: any) => {
  const name = val.key;
  router.push({
    name
  })

}
</script>

<style lang="scss" scoped>
.basic-sider {
  &-header {
    width: 100%;
    height: 64px;
    border-bottom: 1px solid lightcoral;

    .header-title {
      overflow: hidden;
      flex-wrap: nowrap;
      height: 22px;
      transition: width 0.3s;
    }
  }
}
</style>