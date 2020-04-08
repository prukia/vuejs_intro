var app = new Vue({
  el: '#app',
  data: {
    message: 'User Input testing'
  },
  methods: {
    reverseMessage: function (){
      this.message = this.message. split('').reverse().join('')
    }
  }
});

// we update the state of the app w/o touching the DOM, all DOM manipulations are handles by vue
