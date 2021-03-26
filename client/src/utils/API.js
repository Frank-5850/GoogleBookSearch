import axios from "axios";

export default {
  getBook: async (info) => {
    try {
      const test = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${info}`
      );
      return test;
    } catch (error) {
      console.log(error);
    }
  },
  saveBook: async () => {
    try {
      const result = await axios.post("/saveBook", {
        title: "title",
        authors: "author",
        description: "description",
        image: "image",
        link: "link",
      });
      console.log("click", result);
    } catch (err) {
      console.log(err);
    }
  },
};
