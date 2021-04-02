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
  data: function () {
    return {
      email: null,
      firstName: null,
      lastName: null,
      contacts: [],
    };
  },
  mounted() {
    if (localStorage.getItem("contacts")) this.getContactsFromLocalStorage();
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
    getContactsFromLocalStorage() {
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
    },
  },
};
</script>

<style>
#app {
}
</style>