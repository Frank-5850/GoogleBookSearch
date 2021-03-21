import axios from "axios";

export default {
  getBook: async () => {
    try {
      const test = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=HarryPotter`
      );
      return test;
    } catch (error) {
      console.log(error);
    }
  },
};
