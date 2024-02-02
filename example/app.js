const app = Vue.createApp({
  data() {
    return {
      url: "https://misee.pro",
      showBooks: true,
      title: "The title here",
      author: "Maria",
      age: "20",
      books: [
        {
          title: "A queen and more",
          author: "Maria",
          isFav: true,
        },
        {
          title: "Become your owner",
          author: "Stope",
          isFav: false,
        },
        {
          title: "Eternity",
          author: "Jesus",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle(e, title) {
      this.title = title;
      console.log(e);
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");

console.log("Hello Vue");
