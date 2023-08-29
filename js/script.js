const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello world !',
      src:'./img/1.webp'
    }
  }
}).mount('#app')