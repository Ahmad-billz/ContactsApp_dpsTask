<template>
  <div class=container>
    <h1>Contacts</h1>
    <br>
    <br>
    <ol>
      <li v-for="contact in contacts" :key="contact" class=item>
        {{ contact.firstName }} - {{ contact.lastName }} - {{ contact.email }}
      </li>
    </ol>
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
item {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.item h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>