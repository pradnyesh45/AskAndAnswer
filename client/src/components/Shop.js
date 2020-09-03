import React, { useState } from "react";
// import { connect } from "react";
import { Form, Button } from "react-bootstrap";
// import { beginAddImage } from "../actions/photos";
// import axios from "axios";

const Shop = ({ errors, dispatch }) => {
  const [setImage] = useState(null);
  // const [setIsSubmitted] = useState(false);
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [setName] = useState("");
  // const [setPrice] = useState(0);
  // const [setPhoneNumber] = useState(0);

  // useEffect(() => {
  //   setErrorMsg(erros);
  // }, [errors]);

  // useEffect(() => {
  //   setErrorMsg("");
  // }, []);

  const handleOnChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   if (image) {
  //     setErrorMsg("");
  //     dispatch(beginAddImage(photo));
  //     setIsSubmitted(true);
  //   }
  // };

  // handleInputChange = (event, value) => {
  //   setName(value) || setPrice(value) || setPhoneNumber(value);
  // };

  return (
    <React.Fragment>
      {/* {errorMsg && errorMsg.upload_error ? (
        <p className="errorMsg centered-message">{errorMsg.upload_error}</p>
      ) : (
        isSubmitted && (
          <p className="successMsg centered-message">
            Photo uploaded successfully
          </p>
        )
      )} */}

      <Form
        // onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form"
      >
        <Form.Group>
          <Form.Label>Choose photo to upload</Form.Label>
          <Form.Control type="file" name="image" onChange={handleOnChange} />
        </Form.Group>
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
        <input
          placeholder="Product Name"
          type="text"
          required
          onChange={(e) =>
            this.handleInputChange("product_name", e.target.value)
          }
        />
        <Button type="submit">Upload</Button>
      </Form>
    </React.Fragment>
  );
};

// const mapStateToProps = (state) => ({
//   images: state.images || [],
//   errors: state.errors || {},
// });

export default Shop;
// export default connect(mapStateToProps)(Shop);

// class Shop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       file: null,
//       name: "",
//       price: 0,
//       phone_number: 0,
//     };
//     // this.onFormSubmit = this.onFormSubmit.bind(this);
//     // this.onChange = this.onChange.bind(this);
//   }

//   // onFormSubmit(e) {
//   //   e.preventDefault();
//   //   const formula = new FormData();
//   //   formData.append("myfile", this.state.file);
//   //   const config = {
//   //     headers: {
//   //       "content-type": "multipart/form-data",
//   //     },
//   //   };
//   //   axios
//   //     .post("http://localhost:8000/api/v1/shop/create", formData, config)
//   //     .then((response) => {
//   //       alert("The file is successfully uploaded");
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // }

//   handleInputChange = (field, value) => {
//     this.setState({
//       [field]: value,
//     });
//   };

//   onChange(e) {
//     this.setState({ file: e.target.files });
//   }

//   render() {
//     return (
//       <form onSubmit={this.onFormSubmit}>
//         <h1>Items for Sale</h1>
//         <input
//           placeholder="Name"
//           type="text"
//           required
//           onChange={(e) => this.handleInputChange("name", e.target.value)}
//         />
//         <input
//           placeholder="Price"
//           type="number"
//           required
//           onChange={(e) => this.handleInputChange("price", e.target.value)}
//         />
//         <input
//           placeholder="Phone Number"
//           type="number"
//           required
//           onChange={(e) =>
//             this.handleInputChange("phone_number", e.target.value)
//           }
//         />
//         <input
//           placeholder="Product Name"
//           type="text"
//           required
//           onChange={(e) =>
//             this.handleInputChange("product_name", e.target.value)
//           }
//         />
//         <h1>Photo Upload</h1>
//         <input
//           type="file"
//           className="custom-file-input"
//           name="file"
//           onchange={this.onChange}
//         />
//         {console.log(this.state.file)}
//         <button className="upload-button" type="submit">
//           Upload to DB
//         </button>
//       </form>
//     );
//   }
// }

// export default Shop;
