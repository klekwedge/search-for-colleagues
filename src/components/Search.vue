<template>
  <div class="search">
    <h3 class="search__title">Поиск сотрудников</h3>
    <input
      v-model="inputValue"
      type="text"
      placeholder="Введите Id или имя"
      @input="search"
    />
    <h2 class="search__title">Результаты</h2>
    <ul v-if="users.length" class="search__list">
      <UserPreview
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :email="user.email"
        @click="chooseUser(user.id)"
        >{{
      }}</UserPreview>
    </ul>
    <h3 class="search__result" v-else>начните поиск</h3>
  </div>
</template>
      
<script>
import { mapGetters } from "vuex";
import UserPreview from "./UserPreview.vue";

export default {
  name: "Search",
  components: { UserPreview },
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    chooseUser(id) {
      this.$store.dispatch("changeCurrentUser", id);
    },
    search() {
      this.$store.dispatch("fetchUsers", this.inputValue);
    },
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

  .search__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: auto;
  }
}
</style>