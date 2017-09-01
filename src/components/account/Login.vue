<template lang="html">
  <div class="login">
    <Form :model="form" ref="form" :label-width="80" class="account-form" :rules="ruleValidate">
      <h2 class="title">OA登录</h2>
      <Form-item label="账号" prop="username">
        <Input v-model="form.username" placeholder="请输入账号" />
      </Form-item>
      <Form-item label="密码" prop="password">
        <Input v-model="form.password" type="password" placeholder="请输入密码" />
      </Form-item>
      <Form-item label="验证码" prop="captcha">
        <Row>
          <Col span="12">
            <Input v-model="form.captcha" placeholder="验证码" />
          </Col>
          <Col span="12" class="captcha-col">
            <img :src="captchaImg" class="captcha" @click="refresh()" />
          </Col>
        </Row>
      </Form-item>
      <Form-item>
        <Button type="primary" class="account-btn" @click="login('form')">登录</Button>
        <Button type="ghost" class="account-btn account-gap" @click="register('form')">注册</Button>
        <router-link to="/account/forget" class="forget-password">忘记秘密？</router-link>
      </Form-item>
    </Form>
  </div>
</template>

<script>

import config from '@/config'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: '',
        captcha: '',
      },
      captchaImg: config.api_url + 'api/captcha',
      ruleValidate: {
        username: [
            { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码不能少于6字', trigger: 'blur' }
        ],
        captcha: [
            { required: true, message: '验证码不能为空', trigger: 'blur' }
        ],
      }
    }
  },
  watch: {
    captcha(newValue) {
      console.log(newValue);
    }
  },
  methods: {
    ...mapActions([
      'loginRemote'
    ]),
    refresh() {
      let url = this.captcha.split('?')[0];
      let rand = Date.parse(new Date()) + Math.floor(Math.random()*100 + 1);
      this.captcha = url + '?id=' + Date.parse(new Date()) + rand;
    },
    login(name) {
      this.$refs[name].validate((valid) => {
          if (valid) {
            const { username, password, captcha } = this.form;
            let formData = {
              username,
              password,
              captcha
            };
            API.post('/account/login', formData).then(res => {
              console.log(res);
            }).catch(err => {
              console.log(err);
            });
            // this.$Message.success('提交成功!');
          }
      })
    },
    register(name) {
      this.$refs[name].validate((valid) => {
          if (valid) {
            const { username, password, captcha } = this.form;
            let formData = {
              username,
              password,
              captcha
            };
            API.post('/account/register', formData).then(res => {
              console.log(res);
            }).catch(err => {
              console.log(err);
            });
            // this.$Message.success('提交成功!');
          }
      })
    },
    //重置表单数据
    resetFields(name) {
      this.$refs[name].resetFields();
    }
  }
}

</script>
