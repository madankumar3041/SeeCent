
import React, { useState } from 'react';
import firebase from "../config/firebase";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const LandUpdate = ({ clsModal }) => {
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");

  const showAlert = () => {

    // toast("Successful!");
  }
  const resetForm = () => {
  }

  const sendMessage = (e) => {
    const params = {
      image,
      image1,
      image2,
      title,
      description,
      address,
      price,
      contact
    };
    if (params.title && params.description && params.address && params.price && params.contact) {

      firebase.database().ref('Landslist').push().set(params).then(() => {
        showAlert('success', 'Your message was sent successfull');
        clsModal();
      }).catch(() => {
        showAlert('danger', 'Your message could not be sent');
      });
      resetForm();
    } else {
      showAlert('warning', 'Please fill the form');
    };
    e.preventDefault();
  }

  return (
    <div className="App">
      <form id="contact-form" onSubmit={sendMessage}>
        <img className="form-logo" src="/plant.svg" />
        <h1 className="sub-titles add-land">Add your land details and add it in feeds!</h1>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Image url" value={image}
            onChange={(e) => setImage(e.target.value)} />

        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Image url" value={image1}
            onChange={(e) => setImage1(e.target.value)} />

        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Image url" value={image2}
            onChange={(e) => setImage2(e.target.value)} />

        </div>


        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your farm/house name" value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Short note about your place" value={description}
            onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Add one landmark" value={address}
            onChange={(e) => setAddress(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Price" value={price}
            onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Seller Contact" value={contact}
            onChange={(e) => setContact(e.target.value)} />
        </div>
        <button type="submit" className="button" onClick={showAlert} disabled={!(title && description && address && price && contact)}>Add to feeds!</button>
        {/* <ToastContainer /> */}
      </form>
    </div>
  )
}

export default LandUpdate;


