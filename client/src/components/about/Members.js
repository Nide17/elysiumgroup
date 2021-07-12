import React, { useState, useEffect } from 'react'
import { Media } from 'reactstrap'
import { connect } from "react-redux";
import { setMembers } from "../../redux/members/members.actions";

const Members = ({ setMembers, members }) => {

    const [clickedMember, setClickedMember] = useState('')
    const [collapsed, setCollapsed] = useState('true')

    useEffect(() => {
        setMembers();
    });

    const AccordionHeader = ({ value }) => {

        const { memberName } = value
        const collapsedClass = clickedMember === memberName && collapsed ? "btn btn-link p-0 mx-auto" : 'btn btn-link p-0 mx-auto collapsed'
        const ariaExpanded = clickedMember === memberName && collapsed ? "true" : "false";
        const plusIcon = clickedMember === memberName && collapsed ? "fa fa-minus" : "fa fa-plus";

        const collapseClick = () => {
            setCollapsed(!collapsed)
            setClickedMember(memberName)
        }

        return (
            <div className="card-header w-100 m-0 p-1 d-flex justify-content-center" id={`heading${memberName && memberName.split(' ').join('-')}`} onClick={collapseClick}>
                <button className={collapsedClass} data-toggle="collapse" data-target={`#collapse${memberName && memberName.split(' ').join('-')}`} aria-expanded={ariaExpanded} aria-controls={`collapse${memberName && memberName.split(' ').join('-')}`} onClick={collapseClick} >
                    View Details &nbsp;<i className={plusIcon}></i>
                </button>
            </div>)
    }

    const AccordionBody = ({ value }) => {

        const { memberName, memberDescription } = value
        const collapseCourses = clickedMember === memberName && collapsed ? "collapse show" : "collapse"

        return (
            <div id={`collapse${memberName && memberName.split(' ').join('-')}`} className={collapseCourses} aria-labelledby={`heading${memberName && memberName.split(' ').join('-')}`} data-parent="#accordionElysium">
                <div className="card-body"><p>{memberDescription}</p></div>
            </div>)
    }

    if (members != null) {
        const membersAll = members.map(member =>

            <Media key={member.id}>

                <Media left>
                    <Media object src={member.memberImage} alt={member.memberName} style={{ paddingRight: "10px" }} />
                </Media>

                <Media body className="my-auto">

                    <Media heading>{member.memberName}</Media>

                    <h6>{member.designation}</h6>
                    <b>{member.memberPhone}</b>

                    <div id="accordionElysium" className="details">
                        <div className="card">
                            <AccordionHeader value={member} />
                            <AccordionBody value={member} />
                        </div>
                    </div>
                </Media>
            </Media>)

        return (<Media list>{membersAll}</Media>);
    }
}

const mapStateToProps = state => ({
    members: state.membersReducer.members
})

export default connect(mapStateToProps, { setMembers })(Members)