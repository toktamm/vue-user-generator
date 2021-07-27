const app = Vue.createApp({
  data() {
    return {
      firstName: 'Toktam',
      lastName: 'Mohebbi',
      email: 'toktam@toktam.com',
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/women/32.jpg'
    }
  }
})

app.mount('#app')