<template>
  <div class="search">
    <h3 class="search__title">Поиск сотрудников</h3>
    <input type="text" placeholder="Введите Id или имя " />
    <h2 class="search__title">Результаты</h2>
    <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <h3 class="search__result" v-else>начните поиск</h3>
  </div>
</template>
      
<script>
import { mapGetters } from "vuex";

export default {
  name: "Search",
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
.search {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  input {
    width: 240px;
    outline: none;
    padding: 10px;
    color: #76787d;
    font-size: 14px;
    border-radius: 8px;
    border: 1.5px solid var(--all-colors-gray-gray-200, #e9ecef);
    background: var(--all-colors-black-white-white, #fff);
    margin-bottom: 30px;

    &:focus,
    &:active {
      border: 1.5px solid var(--all-colors-gray-gray-200, #a0a1a2);
    }
  }

  .search__title {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 15px;
  }

  .search__result {
    color: #76787d;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>