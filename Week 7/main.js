Vue.component('child',{
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: `<h2>{{ text }}</h2>`
});

new Vue({
  el: '#head',
  data() {
    return {
     	title: 'QUICKCARE'
    }
  }
})



const PromptComponent = {
  template: '<div class="container"><p>${message}</p><button @click="ADD">Total Complaints</button><p id="answer"></p></div>',
  delimiters: ['${', '}'],
  data: function() {
    return {
      message: 'Complaints July: 75 + August: 98'
    }
  },
  methods: {
    ADD: function() {
      document.getElementById('answer').innerHTML= 75 + 98;
    }
  }
};
 new Vue({
  el: '#app',
  components: {
    'prompt-component': PromptComponent
  },
  template: `<prompt-component/>`
});



const UserName = {
  props: {
    firstName: String,
    lastName: String
  },
  template: `
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  `
};

new Vue({
  el: '#v-model-student',
  components: {
    'user-name': UserName
  },
  data() {
    return {
      firstName: 'Mustafa',
      lastName: 'Albashrawi',
    };
  }
});
