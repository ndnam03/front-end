<template>
  <div class="home">
    <header-view></header-view>
  </div>
  <div>
    <SidebarView> </SidebarView>
  </div>
  <div class="float-right mr-96">
    <h1 class="mr-52">This is Home page</h1>
  </div>
</template>

<script setup>
// @ is an alias to /src
import HeaderView from "@/components/HeaderView.vue";
import SidebarView from "@/components/SideBar.vue";
</script>
