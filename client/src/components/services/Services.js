import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setServices } from "../../redux/services/services.actions";

const Services = (props) => {

  useEffect(() => {
    // Inside this callback function we perform our side effects.
    props.setServices();
  });

  const allServices = props.services.map((service) => {
    // Destructuring service object
    const { id, sName, sSrc, sDetails, sTitle } = service;

    return (

      <div className="col-12 col-sm-6 col-xl-3 mb-3" key={id}>

        <div className="card card-body bg-light py-0" id={sTitle}>

          <div className="card-header">
            <h6 className="text-center text-uppercase">
              <strong>{sName}</strong>
            </h6>
          </div>

          <img
            className="card-img-top img-thumbnail rounded"
            src={sSrc}
            alt="Card image1 cap"
          />

          <div
            className="card-img-overlay"
          >
            <button type="button" className="btn btn-outline-warning btn-sm">
              Go to details
            </button>
          </div>

          <div className="brief-info p-2">
            {sDetails.length >= 95 ? (
              <p>
                {sDetails.slice(0, 93)}&nbsp;<a href="/">read more...</a>
              </p>
            ) : (
                <p> {sDetails}</p>
              )}
          </div>

        </div>

      </div>
    );
  });

  return (
    <section className="services-section" id="services">

      <div className="services-container container">

        <div className="row">
          <div className="col-12">
            <h2 className="text-center py-3">Our Expertise</h2>
          </div>
        </div>

        <div className="row">{allServices}</div>

      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    services: state.servicesReducer.dataServices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setServices: () => dispatch(setServices()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
