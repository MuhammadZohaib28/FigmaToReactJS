import React, { useState } from "react";
import "./contact.css";
import image from "../../images/sneakerss.png";

const Contact = () => {

  const [values, setValues] = useState({
    username: "",
    email: "",
    textarea: "",
  });

  const [submittedValues, setSubmittedValues] = useState(null);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Name",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
    },
    {
      id: 3,
      name: "textarea",
      type: "text",
      placeholder: "Type Something Nice :)",
    },
  ];

  const handleSubmit = (e) => {
    const data = new FormData(e.target);
    e.preventDefault();
    if (Object.values(values).some((value) => value.trim() === "")) {
        window.alert("Please fill in all fields");
        return;
      };
    console.log(Object.fromEntries(data.entries()));
    setSubmittedValues(values);
    setValues({
        username: "",
        email: "",
        textarea: "",
      });
  };

  return (
    <div className="contactContainer">
      <div className="contactPageHeadingContainer">
        <h1 className="contactPageHeading">CONTACT US</h1>
        <p className="contactPagePara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          excepturi dignissimos necessitatibus perspiciatis illum unde odio
          quos. Voluptate, eum sunt ullam dolore enim eaque repudiandae
          molestiae ducimus! Corporis, sunt. Odit?
        </p>
      </div>

      <div className="contactPageInputsAndImage">
        <div className="contactPageInputsContainer">
          <form onSubmit={handleSubmit}>
            <div className="contactPageButtonContainer">
              <button className="firstBtn bttn">Via Support Chat</button>
              <button className="secondtBtn bttn">Via Call</button>
            </div>

            <div className="contactPageInputs">
              <button className="contactPageBtn">Via Email Form</button>
              {inputs.map((input) => {
                return (
                  <>
                    <input
                      key={input.id}
                      name={input.name}
                      placeholder={input.placeholder}
                      className="input"
                      type={input.type}
                      value={values[input.name]}
                      onChange={(e) => {
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    />
                  </>
                );
              })}
            </div>
            <button className="bttn submit" type="submit">Submit</button>
          </form>
        </div>

        <div className="contactPageImageContainer">
          <img src={image} alt="" className="contactPageImage" />
        </div>
      </div>
      { submittedValues && (
        <p>
            Name: {submittedValues.username} <br />
            Email: {submittedValues.email} <br />
            Message: {submittedValues.textarea} <br />
        </p>
      )}    
    </div>
  );
};

export default Contact;
