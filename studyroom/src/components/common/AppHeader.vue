<template>
  <div class="header">
    <p class="tittle">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.tittle{
  height: 40px;
}
</style>
