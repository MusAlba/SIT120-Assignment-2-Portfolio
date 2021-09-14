Vue.component('towns', {
  props: ['choice'],
  template: '<option> ID: {choice.id}} Name: {{ choice.text }}</option>'
})
var app = new Vue({
  el: '#app',
  data: {
    title: 'Student Towns',
    selected: 'Melbourne',
    options: [{
        text: 'Mustafa Saleh',
        value: 'Melbourne'
      },
      {
        text: 'Qassim Hussein',
        value: 'Bendigo'
      },
      {
        text: 'Mohammed Amin',
        value: 'Apollo Bay'
      },
      {
        text: 'Zamzam Ali',
        value: 'Geelong'
      }
    ],
    checkedTowns: []
  }
})
