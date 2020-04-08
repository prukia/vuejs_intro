Vue.component('todo-item', {
  props: ['todo'],
  template: '<li> {{ todo.text }}</li>'
})

// a component is a vue instances with predefined options. name as first parameter and options object as the 2nd parameter
// we want to render out a list item with some text and we can use this component in our root vue instance
// not dynamic template: '<li> This is a todo list</li>'
// we need to add a props to make it the component accept

var app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'Milk' },
      { id: 1, text: 'Chai mix' },
      { id: 2, text: 'Diapers' },
    ]
  }
});

// what we want is to pass data from parent scope(app) to the children component (component)
// grocerylist Array that contains items
