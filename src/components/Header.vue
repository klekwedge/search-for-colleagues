<template>
  <div class="header">
    <h1 class="header__title">Жилфонд</h1>
    <h2 class="header__subtitle">Пользователь</h2>
  </div>
</template>
  
  <script>
export default {
    name: 'Header'
};
</script>

  <style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  .header__title {
    color: #e31f24;
    font-size: 32px;
    font-weight: 700;
  }

  .header__subtitle {
    color: #333;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>