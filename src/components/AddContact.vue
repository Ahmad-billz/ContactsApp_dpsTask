<template>
  <form class=form-add>
  <div class=container>
    <header>
    <h1>Add a new Contact</h1>
    <button @click="()=>$router.push('/')" type="button" class="btn clr" >Show Contacts</button>
    </header>
      
    
    <br>
    <div class="form-control">
      <span >
        <label>First name</label>
        <input v-model="firstName" placeholder="Enter first name" />
      </span>

      <span >
        <label>Last name</label>
        <input v-model="lastName" placeholder="Enter last name" />
      </span>
      

      <span >
        <label>Email</label>
        <input type="email" v-model="email" placeholder="Enter emai address" class =add-contact />
      </span>
      <span v-if="showError" style="color: red">
          Fields cannot be empty
        </span>
      <br>
      <br>
    </div>
    <div>
      <button @click="addToContact" type="button" class=btn>Add</button>
    </div>

  </div>
  </form>
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
      showError: false,
    };
  },
  mounted() {
    if (localStorage.getItem("contacts")) this.getContactsFromLocalStorage();
  },
  methods: {

    gotoc() {
      <router-link to="/"></router-link>
    },

    addToContact() {
      this.showError = false;
      if (
        this.isEmpty(this.email) ||
        this.isEmpty(this.lastName) ||
        this.isEmpty(this.firstName)
      ) {
        this.showError = true;
        return;
      }
      this.contacts.push({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      });
      localStorage.setItem("contacts", JSON.stringify(this.contacts));
      this.firstName = this.lastName = this.email = "";
    },
    getContactsFromLocalStorage() {
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
    },
    isEmpty(value) {
      return value === null || value === "" ? true : false;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.form-control {
  margin: 20px 20px;
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
.form-add{
  flex: 2;
  height: 20px;
}

</style>