import React, { useEffect} from 'react';

// REDUX
import { connect } from "react-redux";
import { setProjects } from "../redux/projects/projects.actions";

const Clients = (props) => {

    useEffect(() => {
        // Inside this callback function we perform our side effects.
        props.setProjects();
    });

    const allClients = props.projects.map((proj) => {
        const { id, pClient, pSrc, pKey } = proj;
        // , pClient, pDate, pLocation, pDescription
        return (

            <div className="col-12 col-md-4 col-xl-3 mb-3 col-7" key={id}>
                <div className="card card-body bg-light py-0" id={pKey}>

                    <div className="card-header">
                        <small className="text-center text-uppercase">
                        {pClient}
                        </small>
                    </div>

                    <img
                        className="card-img-top img-thumbnail rounded"
                        src={pSrc}
                        alt="Card image1 cap"
                    />

                </div>
            </div>
        )

    });

    return (
        <section className="clients-section" id="clients">

            <div className="clients-container">

                <div className="row">

                    <div className="col-12 elysium-title-wrapper">
                    <h1 className="elysium-title">ELYSIUM GROUP</h1>
                        <h3>Notable Clients</h3>
                    </div>
                    {allClients}

                </div>
            </div>
        </section>
    );
}


const mapStateToProps = (state) => {
    return {
      projects: state.projectsReducer.dataProjects,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setProjects: () => dispatch(setProjects()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Clients);