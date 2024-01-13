<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="nav">
      <router-link to="/orders"
        ><button class="btn">View Orders</button></router-link
      >
    </div>
  </div>
</template>
<style scoped>
.btn {
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 150px;
  height: 40px;
  cursor: pointer;
}
.btn:hover {
  background-color: #dddddd;
}
</style>
