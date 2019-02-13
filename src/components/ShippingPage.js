import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  checkValidityLength,
  checkValidityEmail,
} from '../utils/validator.utils';

class ShippingPage extends Component {
  state = {
    name: '',
    nameTouched: false,
    nameIsValid: false,
    address: '',
    addressTouched: false,
    addressIsValid: false,
    phone: '',
    phoneTouched: false,
    phoneIsValid: true,
    email: '',
    emailTouched: false,
    emailIsValid: true,
    shipping: '',
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const touched = `${name}Touched`;
    const isValid = `${name}IsValid`;
    const checkValidity = () => {
      if (name === 'email') {
        return checkValidityEmail(value);
      }
      return checkValidityLength(name, value);
    };
    this.setState({
      [name]: value,
      [touched]: true,
      [isValid]: checkValidity(),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name, address, phone, email, shipping,
    } = this.state;
    console.log(name, address, phone, email, shipping);
  };

  render() {
    const {
      email,
      emailTouched,
      emailIsValid,
      name,
      nameTouched,
      nameIsValid,
      phone,
      phoneTouched,
      phoneIsValid,
      address,
      addressTouched,
      addressIsValid,
      shipping,
    } = this.state;
    return (
      <div className="container mt-2" style={{ maxWidth: '640px' }}>
        <form
          className="needs-validation"
          noValidate
          onSubmit={this.handleSubmit}
        >
          <div className="form-group row">
            <label htmlFor="shipping-name" className="col-sm-2 col-form-label">
              Name*
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="name"
                value={name}
                onChange={e => this.handleChange(e)}
                className={classnames('form-control', {
                  'is-invalid': !nameIsValid && nameTouched,
                })}
                id="shipping-name"
                placeholder="Name"
                required
              />
              <div className="invalid-feedback">Please choose a name.</div>
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="shipping-address"
              className="col-sm-2 col-form-label"
            >
              Address*
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="address"
                value={address}
                onChange={e => this.handleChange(e)}
                className={classnames('form-control', {
                  'is-invalid': !addressIsValid && addressTouched,
                })}
                id="shipping-address"
                placeholder="Address"
              />
              <div className="invalid-feedback">
                Please provide a valid address.
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="shipping-phone" className="col-sm-2 col-form-label">
              Phone
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={e => this.handleChange(e)}
                className={classnames('form-control', {
                  'is-invalid': !phoneIsValid && phoneTouched,
                })}
                id="shipping-phone"
                placeholder="Phone"
              />
              <div className="invalid-feedback">
                Please provide a valid phone number.
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="shipping-email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => this.handleChange(e)}
                className={classnames('form-control', {
                  'is-invalid': !emailIsValid && emailTouched,
                })}
                id="shipping-email"
                placeholder="Email"
              />
              <div className="invalid-feedback">Please provide a valid email.</div>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="shipping-options"
              className="col-sm-2 col-form-label"
            >
              Shipping options
            </label>
            <div className="col-sm-10">
              <select
                className="custom-select"
                id="shipping-options"
                name="shipping"
                value={shipping}
                onChange={e => this.handleChange(e)}
              >
                <option defaultValue>Choose...</option>
                <option value="Free shipping">Free shipping</option>
                <option value="ninjPost">ninjPost</option>
                <option value="D7L">D7L 15.99$</option>
                <option value="7post">7post 7.99$</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button
                type="submit"
                className="btn btn-info"
                disabled={
                  !(
                    emailIsValid
                    && nameIsValid
                    && addressIsValid
                    && phoneIsValid
                  )
                }
              >
                Pay
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ShippingPage.propTypes = {};

export default ShippingPage;
