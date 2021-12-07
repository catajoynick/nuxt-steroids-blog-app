<template>
  <section class="new-post-form">
    <form @submit.prevent="onSave">
      <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
      <AppControlInput v-model="editedPost.title">Title</AppControlInput>
      <AppControlInput v-model="editedPost.thumbnailLink"
        >Thumbnail</AppControlInput
      >
      <AppControlInput controlType="text-area" v-model="editedPost.content"
        >Content</AppControlInput
      >
      <AppControlInput controlType="text-area" v-model="editedPost.previewText"
        >Preview Text</AppControlInput
      >
      <AppButton type="submit">Save</AppButton>
      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel"
        >Cancel</AppButton
      >
    </form>
  </section>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput.vue'
import AppButton from '@/components/UI/AppButton.vue'

export default {
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  components: {
    AppControlInput,
    AppButton,
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            content: '',
            thumbnailLink: '',
            previewText: '',
          },
    }
  },
  methods: {
    onSave() {
      //Save the post
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    },
  },
}
</script>

<style></style>
