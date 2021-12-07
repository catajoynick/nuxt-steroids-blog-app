<template>
  <section class="post-lists">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :author="post.author"
      :title="post.title"
      :is-admin="isAdmin"
      :conten="post.content"
      :previewText="post.previewText"
      :thumbnailLink="post.thumbnailLink"
    />
  </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview.vue'
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: Boolean,
    default: false,
    posts: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style style="scope">
.post-lists {
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-content: center;
  justify-content: center;
}
</style>
