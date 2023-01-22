<template>
  <h2 >Contact List</h2>
  <router-link to="/form"><button class="btnAdd">Add a number</button></router-link><router-view/>
  <div class="contactList">
    <div v-for="contact in contactList" :key="contact.name">
      <div class="contactBox">
        <h4 class="contactName">{{ contact.name }}</h4>
        <div class="contactInfos">{{ contact.phone }} </div>
        <button class="btn" @click="addCall(contact)">Call</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  computed: {
    contactList(){
      return this.$store.state.contactList
    },
    callList() {
      return this.$store.state.callList
    },
  },
  methods:{
    addCall(contact) {
      console.log(contact)
      this.$store.commit('addCall', contact)
    }
},
}
</script>





<style scoped>
h2 {
  color: #42b983;
  font-weight: bolder;
  font-size: larger;
  margin: 15px;
}

.contactName{
  display: flex;

}
li{
  list-style-type: none;
}

.contactList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.contactBox {
  margin: 30px 30px;
  padding-left: 20px;
  padding-top: 10px;
  width: 300px;
  height: 100px;
  background-color: aquamarine;
  border-radius: 20px;
  font-size: larger;
}

.contactInfos{
  display: flex;


}

.btn{
  width: 50px;
  height: 30px;
  background-color: #2c3e50;
  color: #42b983;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;

}
.btnAdd{
  width: 140px;
  height: 40px;
  background-color: #2c3e50;
  color: #42b983;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
}
a{
  text-decoration: none!important;
  cursor: pointer;
}
span {
  width: 160px;
  height: 30px;

}


</style>