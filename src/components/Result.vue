<template>
  <div class="result">
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <!-- <h3 class="result__title">
      Выберите сотрудника, чтобы посмотреть его профиль
    </h3> -->
  </div>
</template>
    
<script>
import { mapGetters } from "vuex";

export default {
  name: "Result",
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
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