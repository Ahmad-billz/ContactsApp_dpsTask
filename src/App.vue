<template>
  <div>
    <div>
      <span>
        first name
        <input v-model="firstName" placeholder="Enter first name" />
      </span>

      <span>
        Last name
        <input v-model="lastName" placeholder="Enter last name" />
      </span>

      <span>
        Email address
        <input type="email" v-model="email" placeholder="Enter emai address" />
      </span>
    </div>
    <div>
      <button type="button">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function() {
    return {
      email: String,
      firstName: String,
      lastName: String,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
