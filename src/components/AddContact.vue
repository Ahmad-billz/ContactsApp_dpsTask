<template>
  <div class=container>
    <h1>Add a new Contact</h1>
    <br>
    <br>
    <div>
      <span>
        First name
        <input v-model="firstName" placeholder="Enter first name" />
      </span>
      <br>
      <br>

      <span>
        Last name
        <input v-model="lastName" placeholder="Enter last name" />
      </span>
      <br>
      <br>

      <span>
        Email address
        <input type="email" v-model="email" placeholder="Enter emai address" class =add-contact />
      </span>
      <br>
      <br>
    </div>
    <div>
      <button @click="addToContact" type="button" class=btn>Add</button>
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

<style scoped>
.add-contact {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>