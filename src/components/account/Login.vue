<template lang="html">
  <div class="login">
    <Form :model="form" :label-width="80" class="account-form">
      <h2 class="title">OA登录</h2>
      <Form-item label="账号">
        <Input v-model="form.account" placeholder="请输入账号" />
      </Form-item>
      <Form-item label="密码">
        <Input v-model="form.password" type="password" placeholder="请输入密码" />
      </Form-item>
      <Form-item label="验证码">
        <Row>
          <Col span="12">
            <Input v-model="form.verify_code" placeholder="验证码" />
          </Col>
          <Col span="12">
            <img :src="captcha" class="captcha" @click="refresh()" />
          </Col>
        </Row>
      </Form-item>
      <Form-item>
        <Button type="primary" class="account-btn">登录</Button>
        <Button type="ghost" class="account-btn account-gap">注册</Button>
        <router-link to="/account/forget" class="forget-password">忘记秘密？</router-link>
      </Form-item>
    </Form>
  </div>
</template>

<script>

import config from '@/config'

export default {
  name: 'login',
  data() {
    return {
      form: {
        account: '',
        password: '',
        verify_code: '',
      },
      captcha: config.api_url + 'api/captcha',
    }
  },
  watch: {
    captcha(newValue) {
      console.log(newValue);
    }
  },
  methods: {
    refresh() {
      let url = this.captcha.split('?')[0];
      let rand = Date.parse(new Date()) + Math.floor(Math.random()*100 + 1);
      this.captcha = url + '?id=' + Date.parse(new Date()) + rand;
    }
  }
}

</script>
