var app = new Vue({
	el: "#app",
  data: {
  	title: 'QuickCare Admin',
    grievance1: [
      	{text: 'Mustafah Saleh Albashrawi'},
      	{text: 'My login password has expired and I cannot recover it. Please help.'},
        {text: true}
      ],
      grievance2: [
      	{text: 'Hussein bin Ali'},
      	{text: 'I have issues with my auth code I dont get it.'},
        {text: false}
      ]
    }
})
