<template>
  <div>
    <ul>
      <li v-for="contact in contacts" :key="contact">
        {{ contact.firstName }} - {{ contact.lastName }} - {{ contact.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data: function () {
    return {
      contacts: [],
    };
  },
  mounted() {
    if (localStorage.getItem("contacts")) this.getContactsFromLocalStorage();
  },
  methods: {
    getContactsFromLocalStorage() {
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
    },
  },
};
</script>
<style scoped>
</style>