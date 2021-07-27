const app = Vue.createApp({
  template: '<h1>Hello {{firstName}}</h1>',
  data() {
    return {
      firstName: 'Toktam'
    }
  }
})

app.mount('#app')