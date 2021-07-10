import React from 'react';
import { Media } from 'reactstrap';
import { useEffect } from "react";
import Clients from './Clients'

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
                    <div id="accordion" className="details">
                        <div class="card">

                            <div class="card-header w-100 m-0 p-0 d-flex justify-content-center" id="headingOne">
                                    <button class="btn btn-link p-0 mx-auto" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        View Details
                                    </button>
                            </div>

                            <div id="collapseOne" class="collapse w-100" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    <p>
                                        {member.memberDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <p>ELYSIUM GROUP LTD has been established in November 2019 to provide Consultancy services in Architectural and Engineering activities and related technical
                            consultancy, Consultancy in Project Management and Estate Construction, Consultancy in the field of construction, Control and supervision of works and real estate appraisals Research and experimental development on natural sciences
                            and engineering, Technical testing and analysis and Specialized design activities.
                            The firm is organized by team of professionals, whose contribution have already enriched the quality of services rendered by local as well as international firms, for providing exemplary high quality professional consultancy services to the required standard.
                        </p>

                        <p>The firm is organized to give clients the best possible service by developing the organization constantly to keep abreast of technological developments. The quality assurance procedures are very effective and they are updated regularly to match new requirements. ELYSIUM GROUP LTD places special emphasis on the ability of co-operation and synergetic innovation.</p>
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
                        <h4 className="ml-2">Our Core Values</h4>
                        <table className="table font-weight-bold">

                            <tbody>
                                <tr>
                                    <td className="border-0">👉 Teamwork </td>
                                    <td className="border-0">👉 Ethical</td>
                                </tr>
                                <tr>
                                    <td className="border-0">👉 Synergy</td>
                                    <td className="border-0">👉 Professionalism</td>
                                </tr>
                                <tr>
                                    <td className="border-0">👉 Innovation</td>
                                    <td className="border-0">👉 Dynamism</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-2 members" style={{ display: "flex", justifyContent: "center" }}>
                        <RenderMembers members={props.members} />
                    </div>
                </div>


                <div className="row">

                    <div className="col-12 elysium-clients">
                        <h3>Our Clients</h3>

                        <Clients />

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