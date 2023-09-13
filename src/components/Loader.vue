<template>
  <div class="loader__container"><span class="loader"></span></div>
</template>
    
    <script>
export default {
  name: "Loader",
};
</script>
  
<style lang="scss" scoped>
.loader__container {
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #1f6de3;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>