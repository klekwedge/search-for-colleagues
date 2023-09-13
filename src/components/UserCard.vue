<template>
  <div class="result">
    <h3 class="result__title">
      Выберите сотрудника, чтобы посмотреть его профиль
    </h3>
    <!-- {{ currentUser }} -->
  </div>
</template>
    
<script>

export default {
  name: "UserCard",
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
};
</script>
  
<style lang="scss" scoped>
.result {
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 0px 10px 10px 0px;
  border-left: 1px solid #dededd;
  background: #fff;

  .result__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #76787d;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>