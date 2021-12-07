<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')"
        >Create Post</app-button
      >
      <app-button @click="onLogout">Logout</app-button>
    </section>

    <section class="existing-posts">
      <h1>Existing Post</h1>
      <PostList :posts="loadedPosts" isAdmin />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue'
import AppButton from '@/components/UI/AppButton.vue'
export default {
  layouts: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    PostList,
    AppButton,
  },
  data() {
    return {
      loadedPosts: this.$store.state.loadedPost,
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    },
  },
}
</script>

<style style="scoped">
.admin-page {
  padding: 20px;
}
.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 18px;
}
.existing-posts h1 {
  text-align: center;
}
</style>
