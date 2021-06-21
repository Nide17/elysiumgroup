import React from 'react';
import { Media } from 'reactstrap';

import { useEffect } from "react";

// REDUX
import { connect } from "react-redux";

import { setMembers } from "../redux/members/members.actions";

function RenderMembers({ members }) {

    if (members != null) {
        const membersAll = members.map(member =>

            <Media key={member.id}>
                <Media left>
                    <Media object src={member.memberImage} alt={member.memberName} style={{ paddingRight: "10px" }} />
                </Media>
                <Media body>
                    <Media heading>
                        {member.memberName}
                    </Media>
                    <h6>
                        {member.designation}
                    </h6>
                    <b>{member.memberPhone}</b>
                    <p>
                        {member.memberDescription}
                    </p>
                </Media>
            </Media>
        )

        return (
            <Media list>
                {membersAll}
            </Media>
        );
    }
}

const About = (props) => {

    useEffect(() => {
        // Inside this callback function we perform our side effects.
        props.setMembers();
    });

    return (
        <section className="about-section">

            <div className="container about-container">

                <div className="row">

                    <div className="col-12 elysium-title-wrapper">
                        <h1 className="elysium-title">ELYSIUM GROUP LTD</h1>
                        <h3>About us</h3>
                    </div>

                </div>

                <div className="row mt-3">
                    <div className="col-12 col-sm-6">
                        <h4>Our Objectives</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi vero quam fuga dicta eveniet aliquid! Illo et pariatur maxime?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi vero quam fuga dicta eveniet aliquid! Illo et pariatur maxime?</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h4>Our Mission</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi vero quam fuga dicta eveniet aliquid! Illo et pariatur maxime?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi vero quam fuga dicta eveniet aliquid! Illo et pariatur maxime?</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h4>Our Vision</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi vero quam fuga dicta eveniet aliquid! Illo et pariatur maxime?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi vero quam fuga dicta eveniet aliquid! Illo et pariatur maxime?</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h4>Our Values</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi vero quam fuga dicta eveniet aliquid! Illo et pariatur maxime?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi vero quam fuga dicta eveniet aliquid! Illo et pariatur maxime?</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-5" style={{display: "flex", justifyContent:"center"}}>
                        <RenderMembers members={props.members} />
                    </div>
                </div>

            </div>

        </section>

    );
}

const mapStateToProps = (state) => {
    return {
        members: state.membersReducer.members,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMembers: () => dispatch(setMembers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

