import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Col, Form, Label, FormGroup, Input, Alert } from 'reactstrap';
import { clearErrors } from '../redux/error/error.actions'
import { sendMsg } from '../redux/contacts/contacts.actions'

const Contact = ({ clearErrors, error, sendMsg }) => {
    // const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    const [state, setState] = useState({
        contact_name: '',
        email: '',
        message: ''
    })

    const onChangeHandler = e => {
        clearErrors();
        const { name, value } = e.target
        setState(state => ({ ...state, [name]: value }))
    };

    const onContact = e => {
        e.preventDefault();

        const { contact_name, email, subject, message } = state;

        // Create user object
        const contactMsg = {
            contact_name,
            email,
            subject,
            message
        };

        // Attempt to contact
        sendMsg(contactMsg);

        // Reset fields
        setState({
            contact_name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    return (
        <section className="contacts-section">
            <div className="container contact-container">

                <div className="row">

                    <div className="col-12 elysium-title-wrapper">
                        <h1 className="elysium-title">ELYSIUM GROUP</h1>
                        <h3>Contact us</h3>
                    </div>

                    <div className="col-12 form-container">

                        {error && error.id === "ADD_CONTACT_FAIL" ?
                            <Alert color='danger'>
                                <small>{error.msg.msg}</small>
                            </Alert> :
                            null
                        }

                        <Form id="contactForm" model="contacts" onSubmit={onContact}>

                            <FormGroup row>
                                <Label for="contact_name" sm={3}>Name</Label>
                                <Col sm={9}>
                                    <Input type="text" name="contact_name" placeholder="Your Name" minLength="4" maxLength="50" onChange={onChangeHandler} value={state.contact_name} required />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="email" sm={3}>Email</Label>
                                <Col sm={9}>
                                    <Input type="text" name="email" placeholder="Your Email" minLength="4" maxLength="30" onChange={onChangeHandler} value={state.email} required />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="contactSubject" sm={3}>Subject</Label>
                                <Col sm={9}>
                                    <Input type="text" name="subject" placeholder="Your Subject" minLength="4" maxLength="80" onChange={onChangeHandler} value={state.subject} required />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="email" sm={3}>Message</Label>
                                <Col sm={9}>
                                    <Input type="textarea" name="message" placeholder="Your Message" minLength="10" maxLength="1000" onChange={onChangeHandler} value={state.message} required />
                                </Col>
                            </FormGroup>

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
        </section>);
}

const mapStateToProps = state => ({
    error: state.errorReducer
})

export default connect(mapStateToProps, { clearErrors, sendMsg })(Contact)