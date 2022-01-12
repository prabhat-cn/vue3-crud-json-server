<template>
  <div class="sidebar">
    <ul class="side-menu">
      <!-- "name" as component name and same as router name -->
        <li><router-link :to="{ name: 'Products'}">Products</router-link></li>
        <li><router-link :to="{ name: 'AddProduct'}">Add Product</router-link></li>
    </ul>
</div>
</template>
<script>
export default {
  name: "SideBar"
}
</script>
<style lang="">
  
</style>