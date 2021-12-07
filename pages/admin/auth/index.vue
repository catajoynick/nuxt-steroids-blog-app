<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <app-control-input type="email" v-model="email">
          E-mal Address
        </app-control-input>
        <app-control-input type="password" v-model="password">
          Password
        </app-control-input>
        <app-button type="submit">
          {{ isLogin ? 'Login' : 'Sign up' }}
        </app-button>
        <app-button
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
        >
          Switch to {{ isLogin ? 'Sign Up' : 'Login' }}
        </app-button>
      </form>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/UI/AppButton.vue'
import AppControlInput from '~/components/UI/AppControlInput.vue'
export default {
  components: { AppControlInput, AppButton },
  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      const credentials = {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
        isLogin: this.isLogin,
      }
      this.$store.dispatch('authenticateUser', credentials).then(() => {
        this.$router.push('/admin')
      })
    },
  },
}
</script>

<style style="scoped">
.admin-auth-page {
  padding: 20px;
}
.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
