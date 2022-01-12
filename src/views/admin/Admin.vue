<template>
 <NavMenu />
  <div class="wrraper">
    <div class="left-content">
      <SideBar />
    </div>
    <div class="right-content">
      <!-- to manage all children of admin -->
      <router-view />
   </div>               
  </div>
</template>
<script>
import NavMenu from '@/components/NavMenu'
import SideBar from '@/components/SideBar'

export default {
  name: "Admin",
  components: {NavMenu, SideBar},
}
</script>
<style lang="">
  
</style>