<template lang="html">
  <div class="account">
    <header class="account-header">
      <img src="/static/img/logo.png" />
      <div class="account-btn-group">
        <Button type="primary" class="account-btn">登录</Button>
        <Button type="ghost" class="account-btn">注册</Button>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'account',
  data(){
    return {
    }
  }
}
</script>
