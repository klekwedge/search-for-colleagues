<template>
  <div class="search">
    <h3 class="search__title">Поиск сотрудников</h3>
    <input type="text" placeholder="Введите Id или имя " />
    <h2 class="search__title">Результаты</h2>
    <h3 class="search__result">начните поиск</h3>
  </div>
</template>
      
      <script>
export default {
  name: "Search",
};
</script>
    
      <style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    margin-bottom: 20px;
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