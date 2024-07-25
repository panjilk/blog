<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>更换用户头像</h1>
    <img :src="currentUser.avatar" alt="Current Avatar" width="100" height="100" />
    <input type="file" @change="handleFileChange" accept="image/*" />
    <img
      v-if="newAvatarPreview"
      :src="newAvatarPreview"
      alt="New Avatar Preview"
      width="100"
      height="100"
    />
    <button @click="saveAvatar">保存头像</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      currentUser: {
        id: 1,
        name: 'John Doe',
        avatar: '/path/to/current/avatar.jpg'
      },
      newAvatarFile: null,
      newAvatarPreview: null
    }
  },
  methods: {
    handleFileChange(event) {
      this.newAvatarFile = event.target.files[0]
      this.newAvatarPreview = URL.createObjectURL(this.newAvatarFile)
    },
    saveAvatar() {
      // Send newAvatarFile to server and update currentUser.avatar
      // For demonstration purpose, here we just update currentUser.avatar with newAvatarPreview
      this.currentUser.avatar = this.newAvatarPreview
    }
  }
}
</script>
