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
                <Media body className="my-auto">
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
                        <h1 className="elysium-title">ELYSIUM GROUP</h1>
                        <h3>About us</h3>
                    </div>

                </div>

                <div className="row mt-3">
                    <div className="col-12 col-sm-6">
                        <h4>Our Vision</h4>
                        <p>Our Vision is to be a competent international Consultancy Institution.</p>
                    </div>

                    <div className="col-12 col-sm-6">
                        <h4>Our Mission</h4>
                        <p>Providing high quality and cost effective Consultancy Services in time to our clients by keeping strong team spirit, innovation and dynamism</p>
                    </div>

                    <div className="w-50 mx-auto">
                        <h4 className="ml-2 mt-lg-5">Our Core Values</h4>
                        <table class="table font-weight-bold">

                            <tbody>
                                <tr>
                                    <td className="border-0">Teamwork </td>
                                    <td className="border-0">Ethical</td>
                                </tr>
                                <tr>
                                    <td className="border-0">Synergy</td>
                                    <td className="border-0">Professionalism</td>
                                </tr>
                                <tr>
                                    <td className="border-0">Innovation</td>
                                    <td className="border-0">Dynamism</td>
                                </tr>
                            </tbody>
                        </table>
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