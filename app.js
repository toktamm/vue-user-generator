const app = Vue.createApp({
  data() {
    return {
      firstName: 'Toktam',
      lastName: 'Mohebbi',
      email: 'toktam@toktam.com',
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/women/32.jpg'
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const data = await res.json()
      
      this.firstName = 'John'
      this.lastName = 'Doe'
      this.email = 'john@doe.com'
      this.gender = 'male'
      this.picture = 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  }
})

app.mount('#app')