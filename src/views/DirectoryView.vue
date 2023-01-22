<template>
  <h2>Call History</h2>
  <div class="contactList">
       <div v-for="call in callList" :key="call.name" class="contact">
      <h4>{{ call.name }} </h4>
      <span> {{ call.phone }} </span> |
      <span> date: {{ call.date }} </span> |
      <button @click="addCall(call)" class="btn">Call</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "DirectoryView",
  computed: {
    callList() {
      return this.$store.state.callList
    },

  },
  methods: {
    addCall(call) {
      console.log(call)
      this.$store.commit('addCall', call)
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

.contactList {
}

.contact {
  flex-wrap: wrap;
  display: flex;
  margin: 30px 40px;
  padding: 30px;
  width: auto;
  height: auto;
  background-color: aquamarine;
  border-radius: 20px;
  font-size: larger;
}

h4{
  margin: 15px;
  display: flex;

}
.infos{
  display: flex;
  flex-direction: column;
  align-items: center;

}

.btn{
  width: 50px;
  height: 30px;
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
p {
  width: 160px;
  height: 30px;

}


</style>