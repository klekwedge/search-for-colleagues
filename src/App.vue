<template>
  <div class="container">
    <Header />
    <input
      type="text"
      v-model="searchTerm"
      @input="searchUsers"
      placeholder="Search users"
    />
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      searchTerm: "",
      users: [],
    };
  },
  methods: {
    searchUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users", {
          params: {
            name_like: this.searchTerm,
          },
        })
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 1260px;
  padding: 0px 20px;
  margin: 0 auto;
}
</style>