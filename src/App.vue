<template>
  <div class="container">
    <Header />
    <input
      type="text"
      v-model="searchTerm"
      @input="searchUsers"
      placeholder="Search users"
    />
    <div class="content">
      <Search />
      <Result />
    </div>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Result from "./components/Result.vue";

export default {
  components: {
    Header,
    Search,
    Result,
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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1260px;
  padding: 0px 20px;
  margin: 0 auto;
}

.content {
  display: flex;
  height: 100%;
  width: 100%;
  gap: 30px;
  border-radius: 10px;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 15px 25px;
}
</style>