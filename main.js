// Inizializzo Vue
const { createApp } = Vue;

  createApp({
    data() {
      return {
        // assegno all'h1 una stringa con dentro il messaggio che voglio stampare in pagina
        testoH1: 'Hello World',
      };
    },
  }).mount('#app');