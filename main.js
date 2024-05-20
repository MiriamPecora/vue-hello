// Inizializzo Vue
const { createApp } = Vue;

  createApp({
    data() {
      return {
        // assegno all'h1 una stringa con dentro il messaggio che voglio stampare in pagina
        testoH1: 'Hello World',
        // assegno all'imagine un url tra stringhe
        image: 'https://picsum.photos/200/300',
      };
    },
  }).mount('#app');