new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'Hassan Djirdeh',
    city: 'Toronto'
  },
  methods: {
    changeGreeting() {
      this.greeting = this.greeting === 'Hello World!' ?
       'What is up!' :
       'Hello World!';
    },
    consoleGreeting() {
      console.log("You're typing something!");
    },
    consoleEnterGreeting() {
      console.log("Enter has been released!");
    },
  }
});
