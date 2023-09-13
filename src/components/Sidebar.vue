<template>
  <div class="sidebar">
    <h3 class="sidebar__title">Поиск сотрудников</h3>
    <input
      v-model="inputValue"
      type="text"
      placeholder="Введите Id или имя"
      @input="search"
    />
    <h2 class="sidebar__title">Результаты</h2>
    <ul v-if="users.length" class="sidebar__list">
      <UserPreview
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :email="user.email"
        @click="chooseUser(user.id)"
        >{{
      }}</UserPreview>
    </ul>
    <h3 class="sidebar__result" v-else-if="isLoading === 'idle'">
      начните поиск
    </h3>
    <h3 class="sidebar__error" v-else-if="isLoading === 'error'">
      Возникла ошибка на сервере
    </h3>
    <h3 class="sidebar__loading" v-else-if="isLoading === 'loading'">
      Идет загрузка...
    </h3>
  </div>
</template>
      
<script>
import { mapGetters } from "vuex";
import UserPreview from "./UserPreview.vue";

export default {
  name: "Sidebar",
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
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    chooseUser(id) {
      this.$store.dispatch("changeCurrentUser", id);
    },
    search() {
      if (this.inputValue) {
        this.$store.dispatch("fetchUsers", this.inputValue);
      } else {
        this.$store.dispatch("resetUsers");
      }
    },
  },
};
</script>
    
      <style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 100%;
  max-width: 290px;

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

  .sidebar__title {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 15px;
  }

  .sidebar__result {
    color: #76787d;
    font-size: 14px;
    font-weight: 400;
  }

  .sidebar__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: auto;
  }

  .sidebar__error {
    color: #e31f24;
    font-size: 16px;
  }

  .sidebar__loading {
    color: #1f6de3;
    font-size: 16px;
  }
}
</style>