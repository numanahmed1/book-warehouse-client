import React, { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./AddProduct.css";

const AddProduct = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const handleImgUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "768b893f9ca0508d850dc134cfaf865b");
    imageData.set("image", event.target.files[0]);

    if (imageUrl === "") {
      document.getElementById("loading").style.display = "inline";
    }

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
        document.getElementById("loading").style.display = "none";
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onSubmit = (data) => {
    const bookInfo = {
      name: data.name,
      author: data.author,
      price: data.price,
      imageUrl: imageUrl,
    };

    fetch("https://secret-falls-84464.herokuapp.com/addBook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("book-added").style.display = "block";
      });
  };

  return (
    <Container>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-2">
          <div className="col-md-6 col-lg-6 mt-3">
            <label htmlFor="name">Product Name</label>
            <input
              className="form-control"
              name="name"
              ref={register({ required: true })}
            />
            {errors.name && <p>Product name is required</p>}
          </div>
          <div className="col-md-6 col-lg-6 mt-3">
            <label htmlFor="author">Author Name</label>
            <input
              className="form-control"
              name="author"
              ref={register({ required: true })}
            />
            {errors.author && <p>Author name is required</p>}
          </div>
          <div className="col-md-6 col-lg-6 mt-3">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              name="price"
              ref={register({ required: true })}
            />
            {errors.price && <p> Price is required</p>}
          </div>
          <div className="col-md-6 col-lg-6 mt-3">
            <label className="d-block" htmlFor="name">
              Upload image
            </label>
            <input
              className="img-upload"
              name="image"
              type="file"
              onChange={handleImgUpload}
              ref={register({ required: true })}
            />

            <span id="loading">
              <Spinner animation="grow" />
            </span>
            {errors.image && <p>Image upload is required</p>}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <button className="btn pd-btn">Add Product</button>
          <span id="book-added">Book added successfully.</span>
        </div>
      </form>
    </Container>
  );
};

export default AddProduct;
