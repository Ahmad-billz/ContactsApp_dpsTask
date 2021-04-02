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
      <button @click="addToContact" type="button">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function() {
    return {
      email: null,
      firstName: null,
      lastName: null,
      contacts: [],
      
    };
  },
  mounted() {
  },
  methods: {
    addToContact() {
      this.contacts.push({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      });

      localStorage.setItem("contacts", JSON.stringify(this.contacts));
    },
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
