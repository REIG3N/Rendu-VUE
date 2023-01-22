<template>
  <div class="keyboard">
    <input type="text" placeholder="Write a phone number to call" class="input" v-model="inputList" />
    <div class="dial" >
      <button class="btn 1" @click="dialButtons(1)">1</button>
      <button class="btn 2" @click="dialButtons(2)">2</button>
      <button class="btn 3" @click="dialButtons(3)">3</button>
      <button class="btn 4" @click="dialButtons(4)">4</button>
      <button class="btn 5" @click="dialButtons(5)">5</button>
      <button class="btn 6" @click="dialButtons(6)">6</button>
      <button class="btn 7" @click="dialButtons(7)">7</button>
      <button class="btn 8" @click="dialButtons(8)">8</button>
      <button class="btn 9" @click="dialButtons(9)">9</button>
      <button class="btn Call" @click="addCall(call)" >Call</button>
      <button class="btn 0" @click="dialButtons(0)">0</button>

    </div>

  </div>

</template>
<script>
export default {
  name: "KeyboardView",
  computed: {
    inputList() {
      return this.$store.state.inputList
    },

    callList() {
      return this.$store.state.callList
    },
  },
  methods: {
    dialButtons(value) {
      console.log(value)
      this.$store.commit('dialButtons', value)
      //puis faire une if qui compare la value avec contact.phone et qui affiche le name si c'est le meme phone
    },
    addCall(call) {
      console.log(call)
      this.$store.commit('addCall', call)
    }
  },
}
</script>

<style scoped lang="scss">

.keyboard{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input{
  width: 480px;
  height: 35px;
  margin: 10px;
  font-weight: bolder;
  font-size: larger;
  border-radius: 12px;
  text-align: center;

}

.dial{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 480px;
  height: 600px;
  align-items: center;
  text-align: center;
  background-color: aquamarine;
  border-radius: 20px;

}
.btn{
  width: 140px;
  height: 100px;
  background-color: #2c3e50;
  color: #42b983;
  margin: 10px;
  font-weight: bolder;
  font-size: larger;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}


</style>