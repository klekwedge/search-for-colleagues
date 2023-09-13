<template>
  <div class="card">
    <div class="card__container" v-if="currentUser">
      <img
        class="card__image"
        src="./../assets/big-image.png"
        alt="user image"
      />
      <div class="card__user user">
        <div class="user__contacts">
          <h2 class="user__name">{{ currentUser.name }}</h2>
          <h3 class="user__contact">
            email: <span>{{ currentUser.email }}</span>
          </h3>
          <h3 class="user__contact">
            phone: <span>{{ currentUser.phone }}</span>
          </h3>
        </div>

        <div class="user__info">
          <h2 class="user__about">О себе:</h2>
          <p class="user__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
    <h3 class="card__title" v-else>
      Выберите сотрудника, чтобы посмотреть его профиль
    </h3>
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
.card {
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 0px 10px 10px 0px;
  border-left: 1px solid #dededd;
  background: #fff;

  .card__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #76787d;
    font-size: 14px;
    font-weight: 400;
  }

  .card__container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 60px;
    padding: 20px;
  }

  .card__image {
    width: 100%;
    max-width: 424px;
  }

  .card__user {
    .user__contacts {
      margin-bottom: 20px;
    }

    .user__name {
      color: #000;
      font-size: 16px;
      font-weight: 600;
      line-height: 140%;
      margin-bottom: 10px;
    }

    .user__contact {
      color: #333;
      font-size: 14px;
      font-weight: 600;
      line-height: 140%;

      span {
        color: #76787d;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
      }
    }

    .user__about {
      color: #333;
      font-size: 16px;
      font-weight: 600;
      line-height: 140%;
    }

    .user__text {
      color: #76787d;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>