<template>
  <div class="container" >
    <header>
    <h1>Contacts</h1>
    <button @click="()=>$router.push('/add')" type="button" class="btn clr" >New</button>
    </header>
    <br>
    <ol>
      <li v-for="contact in contacts" :key="contact" class=item>
        {{ contact.firstName }}  {{ contact.lastName }} <br> Email: {{ contact.email }}<br>
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
.item {
  background: #f1efef;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer; 
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>