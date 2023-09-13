<template>
  <div class="preview">
    <img
      class="preview__image"
      src="./../assets/image.png"
      alt="preview card"
    />
    <div class="preview__info">
      {{ name }}
      {{ email }}
    </div>
  </div>
</template>
      
  <script>
export default {
  name: "UserPreview",
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
};
</script>
    
<style lang="scss" scoped>
.preview {
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  .preview__image {
    width: 70px;
    height: 70px;
  }

  .preview__info {
    display: flex;
    padding: 15px;
    flex-direction: column;
    gap: 5px;
  }
}
</style>