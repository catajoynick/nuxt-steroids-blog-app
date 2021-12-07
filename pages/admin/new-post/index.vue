<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm :post="editedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'
export default {
  components: {
    AdminPostForm,
  },
  middleware: ['check-auth', 'auth'],

  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        content: '',
        previewText: '',
        thumbnailLink: '',
      },
    }
  },
  methods: {
    onSubmitted(postData) {
      this.$store
        .dispatch('addPost', postData)
        .then(() => this.$router.push('/admin'))
    },
  },
}
</script>

<style>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
