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
            <img :src="form.verify_img" style="height:33px; margin-left: 10px;" />
          </Col>
        </Row>
      </Form-item>
      <Form-item>
        <Button type="primary">登录</Button>
        <Button type="ghost" style="margin-left: 8px">注册</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>

import VerifyImg from '@/assets/img/verify_code.png'

export default {
  name: 'login',
  data() {
    return {
      form: {
        account: '',
        password: '',
        verify_code: '',
        verify_img: VerifyImg,
      }
    }
  }
}

</script>
