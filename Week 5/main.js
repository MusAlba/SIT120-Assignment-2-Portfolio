Vue.component('students', {
  props: ['names'],
  template: '<li> ID: {{names.id}} Name: {{ names.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
  	title: 'StudentCare',
    studentlist: [
      { id: 'MU13045', text: 'Mustafa Saleh' },
      { id: 'ZA5403', text: 'Zamzam Mohammed' },
      { id: 'HU2945', text: 'Hussein bin Ali' }
    ]
  }
})
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'What is the date today?'
  },
  methods: {
    confirmMessage: function () {
      this.message = new Date();
    }
  }
})
