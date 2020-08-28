import React, { Component } from "react";
import axios from "axios";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      name: "",
      price: 0,
      phone_number: 0,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const formula = new FormData();
    formData.append("myfile", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:8000/api/v1/shop/create", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onChange(e) {
    this.setState({ file: e.target.files });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>Items for Sale</h1>
        <input
          placeholder="Name"
          type="text"
          required
          onChange={(e) => this.handleInputChange("name", e.target.value)}
        />
        <input
          placeholder="Price"
          type="number"
          required
          onChange={(e) => this.handleInputChange("price", e.target.value)}
        />
        <input
          placeholder="Phone Number"
          type="number"
          required
          onChange={(e) =>
            this.handleInputChange("phone_number", e.target.value)
          }
        />
        <h1>Photo Upload</h1>
        <input
          type="file"
          className="custom-file-input"
          name="my-image"
          onchange={this.onChange}
        />
        {console.log(this.state.file)}
        <button className="upload-button" type="submit">
          Upload to DB
        </button>
      </form>
    );
  }
}

export default Shop;
