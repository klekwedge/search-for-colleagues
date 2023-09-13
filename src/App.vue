<template>
  <div>
    <input type="text" v-model="searchTerm" @input="searchUsers" placeholder="Search users">
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchTerm: '',
      users: [],
    };
  },
  methods: {
    searchUsers() {
      axios.get('https://jsonplaceholder.typicode.com/users', {
        params: {
          name_like: this.searchTerm,
        },
      })
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>