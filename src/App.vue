<template>
  <div class="container">
    <Header />
    <div class="content">
      <Sidebar />
      <UserCard />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import UserCard from "./components/UserCard.vue";

export default {
  components: {
    Header,
    Sidebar,
    UserCard,
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
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1260px;
  padding: 50px 20px;
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

@media (max-width: 680px) {
  .container {
    padding: 50px 10px;
  }

  .content {
    flex-direction: column;
    padding: 15px;
  }
}
</style>