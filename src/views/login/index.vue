<template>
  <div class="login-content flex-center">
    <div class="login-card">
      <div class="login-card-header flex-center">登 录</div>
      <div class="login-card-body">
        <a-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }" autocomplete="off"
          @finish="onFinish" @finishFailed="onFinishFailed">
          <a-form-item label="Username" name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]">
            <a-input v-model:value="formState.username" placeholder="admin" />
          </a-form-item>

          <a-form-item label="Password" name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]">
            <a-input-password v-model:value="formState.password" placeholder="123456" />
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">登 录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';

const router = useRouter();
interface FormState {
  username: string;
  password: string;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
});
const onFinish = (values: any) => {
  if (formState.username === 'admin' && formState.password == '123456') {
    localStorage.setItem('dj_token', 'qazxsw123456')
    router.push({
      name: 'work'
    })
  } else {
    message.error('用户名或者密码错误')
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style lang="scss" scoped>
.login-content {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(skyblue, #fff);

  .login-card {
    position: relative;
    width: 400px;
    height: 250px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);

    &-header {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid skyblue;
      font-size: 16px;
      color: #222;
    }
    &-body {
      padding-top: 20px;
    }
  }
}
</style>