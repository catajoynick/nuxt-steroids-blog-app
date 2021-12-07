<template>
  <div class="posts-page">
    <PostList :posts="this.$store.state.loadedPost" />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList.vue'
export default {
  components: { PostList },
}
</script>

<style style="scoped">
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
