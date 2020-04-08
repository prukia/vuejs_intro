var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'Learn Vuejs'},
      { text: 'finish folding clothes'},
      { text: 'finish home office'}
    ]
  }
});

app.todos.push({ text: 'new item in list' })

// push to add new item to list
