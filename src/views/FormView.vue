<template>
  <div>
    <form>
      <label for="name">Nom :</label>
      <input type="text" v-model="contactList.name" id="name" />
      <br/>
      <label for="phone">Numéro de téléphone :</label>
      <input type="text" v-model="contactList.phone" id="phone" />
      <br/>
      <button @click="addContact">Ajouter</button>
    </form>
  </div>
</template>
<script>
export default {
  name :"FormView",
  data() {
    return {
      contactList: {
        name: '',
        phone: '',
      }
    }
  },
  methods: {
    addContact() {
      console.log(this),
      console.log(this.contactList),

      this.$store.commit('addContact',this.contactList)
    }
  }
}
</script>
