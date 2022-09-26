<template>
  <div class="basic-header flex-between">
    <div class="basic-header-left flex-start">
      <MenuUnfoldOutlined v-if="siderStatus" :style="{ cursor: 'pointer', color: 'skyblue' }"
        @click="setSiderStatusFn('open')" />
      <MenuFoldOutlined v-else :style="{ cursor: 'pointer', color: 'skyblue' }" @click="setSiderStatusFn('close')">
      </MenuFoldOutlined>
    </div>
    <div class="basic-header-right flex-end">
      <span class="right-day">{{ today }}</span>
      <a-popover trigger="click">
        <template #content>
          <p class="h-pointer" @click="logout">退 出</p>
        </template>
        <a-avatar style="background-color: #87d068" class="h-pointer">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </a-popover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  LeftSquareTwoTone, UserOutlined, MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
const dayArr: string[] = ['一', '一', '二', '三', '四', '五', '六', '日'];
const today = dayjs().format('YYYY-MM-DD') + ' ' + '星期' + dayArr[dayjs().day()];
const emit = defineEmits(['setSiderWidth']);
let siderStatus = ref<boolean>(false)
const setSiderStatusFn = (val: string) => {
  val === 'close' ? siderStatus.value = true : siderStatus.value = false;
  emit('setSiderWidth', val)
}
const router = useRouter();
const logout = () => {
  localStorage.setItem('dj_token', '');
  router.push({
    path: '/login'
  })
}
</script>

<style lang="scss" scoped>
.basic-header {
  width: 100%;
  height: 100%;

  &-left {
    height: 100%;
  }

  &-right {
    .right-day {
      margin-right: 10px;
    }
  }
}
</style>