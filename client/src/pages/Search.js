import React, { useState } from "react";
import API from "../utils/API";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState([]);

  const searchBook = async (e) => {
    e.preventDefault(e);
    try {
      const result = await API.getBook(form.form);
      const { items } = result.data;
      setBooks(items);
    } catch (error) {
      console.log(error);
    }
  };

  const saveBookFunction = async (item) => {
    try {
      const result = await API.saveBook(item);
      console.log("result", result);
    } catch (err) {
      console.log(err);
    }
  };

  const getPicture = (image) => {
    if (image) {
      return image.thumbnail;
    } else {
      return "";
    }
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container mt-3">
        <form onSubmit={searchBook}>
          <div className="form-group">
            <label htmlFor="search">
              <h2>Search for and save Books of Interest</h2>
            </label>
            <input
              onChange={onChange}
              name="form"
              type="text"
              className="form-control"
              placeholder="Search a Book"
              id="search"
            />
            <button onClick={searchBook} className="btn btn-dark mt-3 mb-5">
              Search
            </button>
          </div>
        </form>
      </div>

      {books.map((item, index) => (
        <div className="card mb-3" key={index}>
          <div className="row">
            <div className="col-md-2">
              <img
                alt={item.volumeInfo.title}
                className="img-fluid"
                src={getPicture(item.volumeInfo.imageLinks)}
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h5 className="card-title">
                  {item.volumeInfo.title} Written by {item.volumeInfo.authors}
                </h5>
                <p className="card-text">{item.volumeInfo.description}</p>
                <div>
                  <a
                    href={item.volumeInfo.infoLink}
                    className="btn badge-pill btn-outline-dark mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                  <button
                    className="btn badge-pill btn-outline-dark mt-3"
                    rel="noreferrer"
                    onClick={saveBookFunction}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
