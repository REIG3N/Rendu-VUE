import { createStore } from 'vuex'

export default createStore({
  state: {
    contactList: [
      {
        name: 'test',
        phone: '0666666666',
        date: "",
      },
    ],
    callList: [
      {
        name: 'toto',
        phone: '0678901234',
        date: "",
        //toLocaleDateString()
      },
      {
        name: 'rototo',
        phone: '0987654321',
        date: "",
      }
    ],
    inputList: "",
  },
  getters: {
  },
  mutations: {
    addContact(state, name) {
//      let dateContact = new Date();
//       let addDate = dateContact.getFullYear() + '-' + (dateContact.getMonth()+1) + '-' + dateContact.getDate() + ' ' + dateContact.getHours() + ':' + dateContact.getMinutes() + ':' + dateContact.getSeconds()
//       console.log(addDate)
//       state.callList.contact.date = addDate
      state.contactList.push(name)
    },
    addCall(state, call) {
//      let dateDirectory = new Date();
//       let addDate = dateDirectory.getFullYear() + '-' + (dateDirectory.getMonth()+1) + '-' + dateDirectory.getDate() + ' ' + dateDirectory.getHours() + ':' + dateDirectory.getMinutes() + ':' + dateDirectory.getSeconds()
//       console.log(addDate)
//       state.callList.call.date = addDate
//       console.log(addDate)
 //     if (state.callList.find(NewNumber => NewNumber.phone == call) == undefined) {
        state.callList.unshift(call)
   //   }else {
     //   console.log()

      },
    dialButtons(state, value){
      state.inputList = state.inputList + value
      console.log(state.inputList)

      if(state.inputList.length > 10 ) {
        state.inputList.preventDefault();

        alert("Le numéro ne doit faire que 10 nombres maximum")
      }

    }
    },


  actions: {
  },
  modules: {
  }
})

