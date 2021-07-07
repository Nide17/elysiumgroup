import React, { Component } from 'react';

import { Control, Form, Errors } from 'react-redux-form';
// actions

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor() {
        super()

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));

        // this.props.postFeedback(values.firstname, values.lastname, values.telnum, values.email, values.agree, values.contactType, values.message);

        console.log(values);

        // this.props.resetFeedbackForm();
    }

    render() {

        return (
            <section className="contacts-section">

                <div className="container contact-container">

                    <div className="row">

                        <div className="col-12 elysium-title-wrapper">
                            <h1 className="elysium-title">ELYSIUM GROUP</h1>
                            <h3>Contact us</h3>
                        </div>

                        <div className="col-12 form-container">

                            <Form id="contactForm" model="contacts" onSubmit={(values) => this.handleSubmit(values)}>

                                <div className="form-group row">

                                    <label htmlFor="contactEmail" className="col-form-label col-md-3">Email</label>

                                    <div className="col-md-9">

                                        <Control.text model=".email" id="email" name="contactEmail" className="form-control" placeholder="Your e-mail" validators={{
                                            required, validEmail
                                        }} />

                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            messages={{
                                                required: 'Required! ',
                                                validEmail: 'Invalid Email Address'
                                            }}
                                        />

                                    </div>

                                </div>

                                <div className="form-group row">
                                    <label htmlFor="contactName" className="col-form-label col-md-3">Name</label>

                                    <div className="col-md-9">

                                        <Control.text model=".name"
                                            id="name" name="contactName" className="form-control" placeholder="Your name" validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(30)
                                            }} />

                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: 'Required! ',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 20 characters or less'
                                            }}
                                        />

                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="contactMsg" className="col-form-label col-md-3">Message</label>
                                    <div className="col-md-9">
                                        <Control.textarea model=".message" id="contactMsg" name="contactMessage" rows="5" className="form-control" validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(100)
                                        }} />

                                        <Errors
                                            className="text-danger"
                                            model=".message"
                                            show="touched"
                                            messages={{
                                                required: 'Required! ',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 100 characters or less'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-9">
                                        <div className="form-check">
                                            <Control.checkbox model=".updates" id="updateCheck" name="updates" className="form-check-input" />
                                            <label className="form-check-label" htmlFor="updateCheck">
                                                Wish to receive updates from Elysium Group
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-9">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>

                            </Form>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
