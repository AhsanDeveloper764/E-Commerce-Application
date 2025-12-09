import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Recaptha from './Recaptha';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const initialValues = {
    EmailAddress: "",
    Password: "",
    ConfirmPassword: "",
    FirstName: "",
    LastName: "",
    CompanyName: "",
    PhoneNumber: "",
    Addressline1: "",
    Addressline2: "",
    City: "",
    Country: "",
    StatePro: "",
    PostCode: "",
    Recovery_code:"",
  };

  const [formvalues, setformvalues] = useState(initialValues);
  const [Errors, setErrors] = useState({});
  const [IsSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const xyz = Math.floor(Math.random()*900000)+100000;
    const updateform = {...formvalues, Recovery_code:xyz}
    const singing = JSON.parse(localStorage.getItem("Credential")) || [];
    const validationErrors = Validate(updateform);
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0) {
      singing.push(updateform);
      localStorage.setItem("Credential",JSON.stringify(singing))
      setIsSubmit(true);
      navigate("/modal/"+formvalues.EmailAddress)
    }};

  const Validate = (values) => {
    const error = {};
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passPattern = /^[a-zA-Z0-9!@#$%^&*_=+-]{8,12}$/;

    if (!emailRegex.test(values.EmailAddress)) {
      error.EmailAddress = "A valid email is required.";
    }
    if (!passPattern.test(values.Password)) {
      error.Password = "Password must be 8-12 characters and include special characters.";
    }
    if (values.ConfirmPassword !== values.Password) {
      error.ConfirmPassword = "Passwords do not match.";
    }
    if (!values.FirstName) {
      error.FirstName = "First Name is required.";
    }
    if (!values.LastName) {
      error.LastName = "Last Name is required.";
    }
    if (!values.CompanyName) {
      error.CompanyName = "Company Name is required.";
    }
    if (!values.PhoneNumber) {
      error.PhoneNumber = "Phone Number is required.";
    }
    if (!values.Addressline1) {
      error.Addressline1 = "Address Line 1 is required.";
    }
    if (!values.Addressline2) {
      error.Addressline2 = "Address Line 2 is required.";
    }
    if (!values.City) {
      error.City = "City is required.";
    }
    if (!values.Country) {
      error.Country = "Country is required.";
    }
    if (!values.StatePro) {
      error.StatePro = "State/Province is required.";
    }
    if (!values.PostCode) {
      error.PostCode = "Postal Code is required.";
    }else{
      navigate("/modal")
    }
    return error;
  };

  return (
    <>
      <div style={{ backgroundColor: "black", fontSize: "30px", color: "black", textAlign: "center" }}>Sign Up</div>
      <div className='sign-img'>
        <img src="src/assets/logo_boxed.svg" className="img-boxed" alt="" />
      </div>
      <div className='containerSign' style={{ paddingTop: "30px" }}>
        <a href="/" className='sign-anc'>Home</a>
        <a href="/sign-up" className='sign-anc' style={{ marginLeft: "10px" }}>Create Account</a>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1 className='acc-head'>NEW ACCOUNT</h1>
      </div>
      <Form className='abc-form' onSubmit={handleSubmit}>
        <Row className="mb-3" >
          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="EmailAddress"
              placeholder="Enter email"
              onChange={handleChange}
              value={formvalues.EmailAddress}
            />
            <p style={{ color: 'red' }}>{Errors.EmailAddress}</p>
          </Form.Group>

          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="Password"
              placeholder="Enter password"
              onChange={handleChange}
              value={formvalues.Password} 
            />
            <p style={{ color: 'red' }}>{Errors.Password}</p>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="ConfirmPassword"
              placeholder="Re-enter-password"
              onChange={handleChange}
              value={formvalues.ConfirmPassword}
            />
            <p style={{ color: 'red' }}>{Errors.ConfirmPassword}</p>
          </Form.Group>

          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="FirstName"
              placeholder="Enter first name"
              onChange={handleChange}
              value={formvalues.FirstName}
            />
            <p style={{ color: 'red' }}>{Errors.FirstName}</p>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="LastName"
              placeholder="Enter last name"
              onChange={handleChange}
              value={formvalues.LastName}
            />
            <p style={{ color: 'red' }}>{Errors.LastName}</p>
          </Form.Group>

          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              name="CompanyName"
              placeholder="Enter company name"
              onChange={handleChange}
              value={formvalues.CompanyName}
            />
            <p style={{ color: 'red' }}>{Errors.CompanyName}</p>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="PhoneNumber"
              placeholder="Enter phone number"
              onChange={handleChange}
              value={formvalues.PhoneNumber}
            />
            <p style={{ color: 'red' }}>{Errors.PhoneNumber}</p>
          </Form.Group>

          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridAddress1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              type="text"
              name="Addressline1"
              placeholder="Enter address line 1"
              onChange={handleChange}
              value={formvalues.Addressline1}
            />
            <p style={{ color: 'red' }}>{Errors.Addressline1}</p>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridAddress2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="text"
              name="Addressline2"
              placeholder="Enter address line 2"
              onChange={handleChange}
              value={formvalues.Addressline2}
            />
            <p style={{ color: 'red' }}>{Errors.Addressline2}</p>
          </Form.Group>

          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="City"
              placeholder="Enter city"
              onChange={handleChange}
              value={formvalues.City}
            />
            <p style={{ color: 'red' }}>{Errors.City}</p>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridState">
            <Form.Label>State/Province</Form.Label>
            <Form.Control
              type="text"
              name="StatePro"
              placeholder="Enter state/province"
              onChange={handleChange}
              value={formvalues.StatePro}
            />
            <p style={{ color: 'red' }}>{Errors.StatePro}</p>
          </Form.Group>

          <Form.Group as={Col} xl={6} lg={6} md={6} sm={12} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Select
              name="Country"
              defaultValue="Choose..."
              onChange={handleChange}
              value={formvalues.Country}
            >
              <option>Choose...</option>
              <option>Pakistan</option>
              <option>India</option>
              <option>Sri Lanka</option>
            </Form.Select>
            <p style={{ color: 'red' }}>{Errors.Country}</p>
          </Form.Group>
        </Row>

        <Form.Group controlId="formGridZip" style={{ width: "50%" }}>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            name="PostCode"
            placeholder="Enter postal code"
            onChange={handleChange}
            value={formvalues.PostCode}
          />
          <p style={{ color: 'red' }}>{Errors.PostCode}</p>
        </Form.Group>

        <Recaptha />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "40px" }}>
          <button
            type="submit"
            style={{ border: "1px solid #666", padding: "6px", borderRadius: "7px", width: "150px", marginBottom: "20px" }} >
            Create Account
          </button>
        </div>
      </Form>
    </>
  );
};

export default SignUp;
